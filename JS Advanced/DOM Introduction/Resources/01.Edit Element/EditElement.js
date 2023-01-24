function editElement(ref, match, replacer) {
   
    const content = ref.textContent;
    const edited = content.split(match).join(replacer);
    ref.textContent = edited;

}
editElement(ref, 'name', 'Sve')