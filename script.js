document.addEventListener('DOMContentLoaded',()=>{
    const fqaContainer=document.querySelector('.faq-accordion');
    
    fqaContainer.addEventListener('click',(e)=>{
        const groupHeader=e.target.closest('.faq-dropdown-header')
        if(!groupHeader) return;
        const group=groupHeader.parentElement;
        const groupbody=group.querySelector('.faq-dropdown-body')
        const icon=groupHeader.querySelector('.faq-icon')
        icon.classList.toggle('open')
        groupbody.classList.toggle('open')
        const otherGroups=fqaContainer.querySelectorAll('faq-dropdown')
        otherGroups.forEach((otherGroups)=>{
            if(otherGroups!=group){
                const otherGroupBody=otherGroup.querySelectorAll('.faq-dropdown-body')
                const otherIcon=otherGroup.querySelector('.faq-icon')

                otherGroupBody,classList.remove('open')
                otherIcon.classList.remove('open')
            }
        })
    })
})