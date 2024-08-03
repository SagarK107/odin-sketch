
const body = document.getElementById("container");

for (var i = 0; i < 4; i++)
{
    const row_div = document.createElement("div");
    row_div.id = `row_${i}`
    body.appendChild(row_div);
    
    for(var j = 0; j < 4; j++)
    {
        const column_div = document.createElement("div");
        const grid_text = `value_${i}_${j}`;
        const grid_text_node = document.createTextNode(grid_text);
        column_div.id = `column_${j}`
        column_div.appendChild(grid_text_node);
        row_div.appendChild(column_div);


        
    }
}