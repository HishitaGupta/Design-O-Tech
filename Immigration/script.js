const sr= ScrollReveal({
    origin:'top',
    distance: '500px',
    duration: 2500 ,
    delay: 400,
   
    

})
sr.reveal(`#img1,#img3`,{origin:'left',opacity:1})
sr.reveal(`#img2,#img4`,{origin:'right',opacity:1})
// sr.reveal(`#hero-h1`,{origin:'top',opacity:1})
// sr.reveal(`#hero-h6`,{origin:'bottom',opacity:1})

const sr2= ScrollReveal({
    origin:'top',
    distance: '50px',
    duration: 2500 ,
    delay: 400,
  
    

})
sr2.reveal(`#hero-h1`,{origin:'top',opacity:1})
sr2.reveal(`#hero-h6, #contact-btn`,{origin:'bottom',opacity:1})

