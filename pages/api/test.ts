export default function handler(req, res) {
  console.log(`call ----api---${new Date().getTime()}`);

  // 检查请求方法
  if (req.method === "GET") {
    // 处理 GET 请求
    console.log(`call ----api---from--get--${new Date().getTime()}`);

    // 设置响应头
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader("Content-Length", "38");
    res.setHeader("Connection", "keep-alive");
    res.setHeader("Date", "Wed, 11 Sep 2024 12:25:46 GMT");
    res.setHeader("Vary", "Origin");
    res.setHeader("x-tt-logid", "20240911202546CE362809A4DCD36AA96C");
    res.setHeader("x-lc-request-id", "20240911202546CE362809A4DCD36AA96C");
    res.setHeader(
      "x-inspirecloud-request-id",
      "20240911202546CE362809A4DCD36AA96C"
    );
    res.setHeader("x-gw-dst-psm", "larkcloud.fn.ttdo8z");
    res.setHeader(
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload"
    );
    res.setHeader("server-timing", "inner; dur=28");
    res.setHeader(
      "x-tt-trace-host",
      "01c3abd50b42f7de01f82d187e869e633fbd8a3ad5c35ab727b47b98f59d1183fdd40f4c522800005ba8aad8fe056c725418ecebc12b17e6fcf38b524686da472be378685b293fcdc4481bfe5099d577e71cb8e8b2a1d6e403bf0632b88bdde5a565ba04b0a0eadf8e9e0dda3373ce3519"
    );
    res.setHeader("x-tt-trace-tag", "id=03;cdn-cache=miss;type=dyn");
    res.setHeader(
      "x-tt-trace-id",
      "00-240911202546CE362809A4DCD36AA96C-592F8FF0600D5AA4-00"
    );
    res.setHeader(
      "Via",
      "cache3.l2nu20-8[45,0], cache31.l2hk2[73,0], cache13.l2jp1[121,0], ens-cache2.sg20[243,0]"
    );
    res.setHeader(
      "server-timing",
      "cdn-cache;desc=MISS,edge;dur=198,origin;dur=45"
    );
    res.setHeader("Timing-Allow-Origin", "*");
    res.setHeader("EagleId", "a3b5a69617260575459301850e");

    res.status(200).json({ message: "Hello from /api/test" });
  } else {
    // 处理其他请求
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
