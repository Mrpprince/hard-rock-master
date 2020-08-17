
const s1=document.getElementById("song-name1");
const s2=document.getElementById("song-name2");
const s3=document.getElementById("song-name3");
const s4=document.getElementById("song-name4");
const s5=document.getElementById("song-name5");
const s6=document.getElementById("song-name6");
const s7=document.getElementById("song-name7");
const s8=document.getElementById("song-name8");
const s9=document.getElementById("song-name9");
const s10=document.getElementById("song-name10");



const a1 = document.getElementById("artist-name1");
const a2 = document.getElementById("artist-name2");
const a3 = document.getElementById("artist-name3");
const a4 = document.getElementById("artist-name4");
const a5 =document.getElementById("artist-name5");
const a6 =document.getElementById("artist-name6");
const a7 =document.getElementById("artist-name7");
const a8 = document.getElementById("artist-name8");
const a9 = document.getElementById("artist-name9");
const a10 = document.getElementById("artist-name10");



const songList =[s1,s2,s3,s4,s5,s6,s7,s8,s9,s10];
const artistList =[a1,a2,a3,a4,a5,a6,a7,a8,a9,a10]; 




const input1=document.getElementById("input-1");

document.getElementById("btn-1").addEventListener("click",search);
function search()
{
    getResults(input1.value);
    input1.value="";
}

function getResults(query)
{
    fetch(`https://api.lyrics.ovh/suggest/${query}`)
    .then(lyrics=>{
        return lyrics.json();

    }).then (displayResults)
    
}

function displayResults(lyrics)
{
    console.log(lyrics);

    

      for (let i =0 ;i<songList.length; i++)
      {
         
           songList[i].innerHTML=`${lyrics.data[i].title}`;
           artistList[i].innerText=`${lyrics.data[i].artist.name}`;
        
          
      }

    

}

const getlyrcs=document.getElementsByClassName("get");

for(let i=0;i< songList.length;i++)
{
 getlyrcs[i].addEventListener("click",function(){
          
         const title =songList[i].innerHTML;
         const artist = artistList[i].innerText;
        
         GetLyrics(artist,title)
      })
}
function GetLyrics(artist, title,)
{
    
      
    document.getElementById("song_name").innerHTML=title;


    fetch (`https://api.lyrics.ovh/v1/${artist}/${title}`)
    .then(response => response.json())
    .then(data=> {
        console.log(data);

       
       if (data.lyrics==undefined)
       {
        document.getElementById("lyrics").innerHTML="No Lyrics Found";
       }
       else
       {
        document.getElementById("lyrics").innerHTML=data.lyrics;
       }
        
      
    })
  }




