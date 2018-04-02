export class Animation {
	
	addOutput(id: string){
		let content = document.getElementById(id);
		content.classList.add('disappear');
		return content;
	}

	deleteEntry(id: string){
  	let content = document.getElementById(id);
  	content.addEventListener('animationend', () => content.classList.remove('appear'));
  }
  
}
