module.exports = {
    root:process.cwd(),  //执行文件的路径
    localhost : '127.0.0.1',
    port:9527,
    compress:/\.(html|js|css|md)/,
    cache:{
      maxAge:600,
      expires:true,
      cacheControl:true,
      lastModified:true,
      etag:true
    }
}
