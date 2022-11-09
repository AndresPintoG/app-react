//REST API
//REST es un protocolo que nos enseña como escribir codigo REST con HTTP
//HTTP Es un protocolo que nos permite la comunicación entre varias computadoras
//Con HTTP Nos comunicamos con las api por medio de Get, post, delete, put
//Además HTTP nos devuelve un codigo de respuesta (por si la consulta fallo o funciono etc...)
//Las API siempre nos devuelven al cliente un codigo de estado y un json si todo sale bien
import { pool } from "../db.js";
//request = Solicitud, response= Respuesta
export const getTasks = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM tasks ORDER BY id DESC");
    console.log("resultado: " + result[0]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getTask = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM tasks where id=?", [
      req.params.id,
    ]);
    if (result.length === 0) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(result[0]);
  } catch (err) {
    return res.status(404).json({
      message: err.message,
    });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, content } = req.body;
    const [result] = await pool.query(
      "INSERT INTO tasks(title, content) VALUES(? , ?)",
      [title, content]
    );
    console.log("result: " + result);
    res.json({
      id: result.insertId,
      title,
      content,
    });
  } catch (err) {
    return res.status(404).json({
      message: err.message,
    });
  }
};
