const moveTo = new MoveTo();

const button = document.querySelectorAll('button');
button.forEach(btn => moveTo.registerTrigger(btn))

const link = document.querySelectorAll('a')
link.forEach(btn => moveTo.registerTrigger(btn))



