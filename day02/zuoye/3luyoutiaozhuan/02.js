function showIndex(req,res){
    res.end('Index');
}
function showNew(req,res){
    res.end('New');
}
function showAbout(req,res){
    res.end('About');
}
module.exports={
    showIndex:showIndex,
    showNew:showNew,
    showAbout:showAbout
}