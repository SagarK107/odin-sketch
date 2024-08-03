
const body = document.getElementById("container");

function createGrid(gridSize)
{
    for (var i = 0; i < gridSize; i++)
        {
            const row_div = document.createElement("div");
            row_div.id = `row_${i}`
            body.appendChild(row_div);
            
            for(var j = 0; j < gridSize; j++)
            {
                const column_div = document.createElement("div");
                // const grid_text = `value_${i}_${j}`;
                // const grid_text_node = document.createTextNode(grid_text);
                // column_div.appendChild(grid_text_node);
                column_div.id = `column_${j}`
                
                row_div.appendChild(column_div);
        
        
                
            }
        }
        
}

function popUpResize()
{
    const prompt = window.prompt("Enter new grid size (between 1 and 100)");
    const gridSize = parseInt(prompt);
    console.log(gridSize);
    if (isNaN(gridSize))
    {
        window.alert("Invalid number, please input an integer");
    }
    if (gridSize > 100 || gridSize < 1)
    {
        window.alert("Number should be between 1 and 100");
    }
    else{
        //clear element
        while(body.firstChild)
        {
            body.removeChild(body.lastChild);
        }
        createGrid(gridSize);
    }

}
