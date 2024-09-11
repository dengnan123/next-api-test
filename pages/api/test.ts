export default function handler(req, res) {
  console.log(`call ----api---${new Date().getTime()}`);

  // 检查请求方法
  if (req.method === "GET") {
    // 处理 GET 请求
    console.log(`call ----api---from--get--${new Date().getTime()}`);
    res.status(200).json({ message: "Hello from /api/test" });
  } else {
    // 处理其他请求
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
