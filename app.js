function savedata(e){
    e.preventDefault()
    const title = document.querySelector("#title").value;
    const content = document.querySelector("#content").value;
    const slug = document.querySelector("#slug").value;
    const rating = document.querySelector("#rating").value;
    const date = document.querySelector("#date").value;
    const author = document.querySelector("#author").value;

    const data = {data:{title:title,content:content,slug:slug,rating:rating,date:date,author:author}}
setdata(data)

}

async function setdata(data){
    const res = await fetch("http://localhost:1337/api/blogs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)})
    const data1 = await res.json();
    console.log(data1);
}

async function getdata(){
    const res = await fetch("http://localhost:1337/api/blogs")
    const data = await res.json();
    console.log(data);
    let str=""
    let dataarr = data.data.attributes;
    dataarr.map(i=>str += '<tr><td>'+i.title+'<td><tr>')
    document.querySelector(".tbody").innerHTML = str;
}