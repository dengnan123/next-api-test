export default function handler(req, res) {
  // 检查请求方法
  if (req.method === "GET") {
    // 处理 GET 请求
    res.status(200).json({ message: "Hello from /api/test" });
  } else {
    // 处理其他请求
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
