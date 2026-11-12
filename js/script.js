document.addEventListener('DOMContentLoaded',()=>{
  const toggle=document.querySelector('.menu-toggle');
  const nav=document.querySelector('.nav-links');
  if(toggle&&nav) toggle.addEventListener('click',()=>nav.classList.toggle('open'));
  document.querySelectorAll('form[data-demo-form]').forEach(form=>{
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const note=form.querySelector('.notice');
      if(note){note.style.display='block';note.textContent='Thank you. Your message has been prepared in this demo. Please connect a secure backend to receive and manage real submissions.';}
      form.reset();
    });
  });
  const year=document.querySelector('[data-year]');
  if(year) year.textContent=new Date().getFullYear();
});