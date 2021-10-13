import React, { Component } from "react";

class Main extends Component {
    
    render(){
        return(
            <div>
               <h2>Drawing Tool</h2>
                <label for="">  
                Select a 'input.txt' file with commands following the rules:</label>
                <h3 id="title">Rules:</h3>
                <ul>
                <li>Create Canvas (C): Should create a new canvas of width w and height h.</li>
                <li>Create Line (L): Should create a new line from (x1,y1) to (x2,y2). Currently only horizontal or vertical lines are supported. Horizontal and vertical lines will be drawn using the 'x' character.</li>
                <li>Create Rectangle (R): Should create a new rectangle, whose upper left corner is (x1,y1) and lower right corner is (x2,y2). Horizontal and vertical lines will be drawn using the 'x' character.</li>
                <li>Bucket Fill (B): Should fill the entire area connected to (x,y) with "colour" c. The behaviour of this is the same as that of the "bucket fill" tool in paint programs.</li>
                <h3>Input model:</h3>
                <p>(Change the values after the first letter for numbers and the color (c) with o)</p>
                <div class="square">
                <b>C w h</b>
                <p><b>L x1 y1 x2 y2</b></p>
                <p><b>R x1 y1 x2 y2</b></p>
                <p><b>B x y c</b></p>
                </div>
                </ul>
                
                <br />
                <label class="custom-file-upload">
                <input type="file"/>
                Choose File
                </label>
                
                <br />
                <br />
                <button id="draw" type="button">Draw</button>
            </div>
            
        );
    }
}
export default Main;
