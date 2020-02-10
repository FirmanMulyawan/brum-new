$(window).on("scroll", function() {
  var scrollValue = $(window).scrollTop()
  if (scrollValue > 140) {
    $(".navbar").addClass("affix")
  } else {
    $(".navbar").removeClass("affix")
  }
})

// remove Element
// $(document).ready(function() {
//   $("#gallery-card-1").on("click", function() {
//     $(".card-deck").remove()
//     var elem = `
//     <div class="container">
//     <div class="card-deck">
//       <div class="card">
//         <ul>
//           <li>
//             <a href="#">
//               <img
//                 src="../img/gallery-activitas/"
//                 class="card-img-top"
//                 alt="..."
//               />
//             </a>
//           </li>
//         </ul>
//       </div>
//       <div class="card" id="gallery-card-2">
//         <ul>
//           <li>
//             <a href="#">
//               <img src="./img/gallery-2.jpg" class="card-img-top" alt="..." />
//             </a>
//           </li>
//         </ul>
//       </div>
//       <div class="card" id="gallery-card-3">
//         <ul>
//           <li>
//             <a href="#">
//               <img src="./img/gallery-3.jpg" class="card-img-top" alt="..." />
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//     </div>
//     `
//     $("#gallery-gallery").html(elem)
//   }),
//     $("#gallery-card-2").on("click", function() {
//       $(".card-deck").remove()
//       console.log("gallery 2")
//     }),
//     $("#gallery-card-3").on("click", function() {
//       $(".card-deck").remove()
//       console.log("gallery 3")
//     })
// })
