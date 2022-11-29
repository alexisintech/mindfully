// Set onClick handler for clicking a prompts-nav option
const all_prompts_container = document.querySelector('.all-prompts-container');
const by_you_container = document.querySelector('.by-you-prompts-container');
const for_you_container = document.querySelector('.for-you-prompts-container');

for(let prompt_nav_options of document.querySelectorAll('.prompts-nav button')){
    prompt_nav_options.addEventListener('click', show_prompts)
}

function show_prompts(){
    all_prompts_container.classList.add('hidden')
    by_you_container.classList.add('hidden')
    for_you_container.classList.add('hidden')
    
    document.querySelector('.current-option').classList.remove('current-option');
    this.classList.add('current-option');
    let current_option = document.querySelector('.current-option')
    
    if(current_option.classList.contains('all-prompts')){
        all_prompts_container.classList.remove('hidden')
    } else if(current_option.classList.contains('by-you-prompts')){
        by_you_container.classList.remove('hidden')
    } else if(current_option.classList.contains('for-you-prompts')){
        for_you_container.classList.remove('hidden')
    }
}