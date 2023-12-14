"use strict";
const gallery = document.getElementById('gallery')
const photoArray = ['https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg','https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80','https://images.pexels.com/photos/2531237/pexels-photo-2531237.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500','https://www.canon.com.au/-/media/images/stories/best-community-images-2018/image-1-daveyr-seasparkle-1000.ashx?la=en','https://st2.depositphotos.com/2001755/5408/i/450/depositphotos_54081723-stock-photo-beautiful-nature-landscape.jpg','https://thumbs.dreamstime.com/b/sea-water-ocean-wave-surfing-surface-colorful-vibrant-sunset-barrel-shape-124362369.jpg','https://media.macphun.com/img/uploads/macphun/blog/625/visiting-site-photo-frame.jpg?q=75&w=1710&h=906&resize=cover','https://imageio.forbes.com/specials-images/imageserve/5faad55af0851928cb60532b/Best-Animal-Photos-Contest--highland-cattle-in-heather-blooming-season-amid-fog-/0x0.jpg?crop=959,959,x0,y134,safe&height=711&width=711&fit=bounds','https://i0.wp.com/picjumbo.com/wp-content/uploads/pure-nature-landscape-single-tree-in-green-field-free-photo.jpg?w=600&quality=80']
for(let i=0;i<9;i++){
    const photoContainer = document.createElement("div")
    gallery.appendChild(photoContainer)
    photoContainer.style.width="200px"
    photoContainer.style.height="200px"
    photoContainer.style.margin="2px"
    photoContainer.style.display="inline-block"
    photoContainer.style.position="relative"
    // image.style.objectFit="cover"
    // image.style.border="solid 2px white"
}
const galleryArray = document.querySelectorAll('#gallery>div')
console.log(galleryArray);
galleryArray.forEach((el,index)=>{
    const photo = document.createElement("img")
    photo.setAttribute('src',photoArray[index])
    photo.style.width="200px"
    photo.style.height="200px"
    el.style.border="solid 2px white"
    el.append(photo)
    const heart = document.createElement("img")
    el.addEventListener("click",()=>{
        if(el.style.border==="2px solid red"){
            el.style.border="solid 2px white"
            heart.remove()
        }else{
            el.style.border="solid 2px red"
            heart.setAttribute('src','https://downloadfreesvgicons.com/icons/shape-icons/svg-heart-icon-3/svg-heart-icon-3.svg')
            heart.style.position="absolute"
            heart.style.height="50px"
            heart.style.width="50px"
            heart.style.right="0"
            el.append(heart)
            el.style.glow="0px 0px 10px 0px rgba(255,0,0,1)"
        }
    })
})