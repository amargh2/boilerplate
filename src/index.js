import './style.css';

const elements = {
    div: {
        create: (classes, text) => {
            
            const div = document.createElement('div');
            classes.forEach(cls => div.classList.add(cls));
            div.textContent = text;
            return div;
        }
    },
    
    button: {
        create: () => document.createElement('button'),
    },
    
    h1: {
        create: () => document.createElement('h1'),
    }
}


const buildingBlocks = {

    //helper functions for factories
    addText: (element, string) => {
        element.textContent = string;
    },

    newDiv: () => {
        const div = document.createElement('div');
        return div;
    },

    /*pass in classes and text, get back a div with the classlist created and text added*/
    divFactory: (classes, text = '') => {
        const div = buildingBlocks.newDiv();
        buildingBlocks.assignClasses(classes, div)
        if (text != '') buildingBlocks.addText(div, text);
        return div
    },

    buttonFactory: (classes, text= '') => {

    },

    /*helper function for divFactory*/
    assignClasses: function(classes, div) {
       div.classList.add(...classes); 
       return div
    },

    /*Provide values and a div with the amount of specified rows, columns, gap and flow direction will be returned. */
    makeGridContainer: (cols, rows, flow, gap) => {
        const classes = ["grid", `grid-cols-${cols}`, `grid-rows-${rows}`, `grid-flow-${flow}`, `gap-${gap}`];
        const gridContainer = buildingBlocks.divFactory(classes);
        return gridContainer
    },
};

const toDo = ({title, description, dueDate, priority}) => ({
    title,
    description,
    dueDate,
    priority,
})

/*completed objects should be stored in an array and then iterated through with strikethrough or something at the bottom of the page.. hmm */