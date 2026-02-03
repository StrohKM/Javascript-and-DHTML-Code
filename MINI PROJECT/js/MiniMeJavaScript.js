document.addEventListener('DOMContentLoaded', () =>
{
    const colorSelect = document.getElementById('customize');
    const commentArea = document.getElementById('commentArea');

    commentArea.addEventListener("click", (e) => {
    if (e.target.classList.contains("commentDeleteBtn")) {
        e.stopPropagation();
        const comment = e.target.closest(".commentBox");
        comment.remove();
    }
});

    // Floral Theme variables
    // //////////////////////////////////////////////////////
    const floralTheme = document.getElementById('floralTheme');
    const floralBanner = document.getElementById('floralBanner');
    const floralTextBox = document.getElementById('floralTextBox');

    // //////////////////////////////////////////////////////

    // Aquatic Theme Variables
    // //////////////////////////////////////////////////////
    const aquaticTheme = document.getElementById('aquaticTheme');
    const aquaticBanner = document.getElementById('aquaticBanner');
    const aquaticTextBox = document.getElementById('aquaticTextBox');
    // //////////////////////////////////////////////////////

    
    // Random Theme Variables
    // //////////////////////////////////////////////////////
    const randomTheme = document.getElementById('randomTheme');
    const randomBanner = document.getElementById('randomBanner');
    const randomTextBox = document.getElementById('randomTextBox');
    // //////////////////////////////////////////////////////

    // Reset the dropdown so that the banner doesn't pop up on the default dropdown option
    colorSelect.value = ""; 
    floralBanner.style.display = "none";
    aquaticBanner.style.display = "none";
    randomBanner.style.display = "none";

    floralTheme.style.display = "none";
    aquaticTheme.style.display = "none";
    randomTheme.style.display = "none";

    floralTextBox.style.display = "none";
    aquaticTextBox.style.display = "none";
    randomTextBox.style.display = "none";

    //Adding a comment button that can be dragged and dropped to an image
    document.getElementById("addCommentBtn").addEventListener("click", function () {

        // Create comment box
        const comment = document.createElement("div");
        comment.classList.add("commentBox");

        const textArea = document.createElement("div");
        textArea.classList.add("commentText");
        textArea.contentEditable = true;
        textArea.innerText = "Write a comment...";
        comment.appendChild(textArea);

        // Delete button for comment
        const delBtn = document.createElement("button");
        delBtn.innerText = "×";
        delBtn.classList.add("commentDeleteBtn");
        comment.appendChild(delBtn);

        // Adding to page
        document.getElementById("commentArea").appendChild(comment);

        // Make comment box draggable and resizable
        $(comment).draggable({
           containment: false,
           cancel: ".commentText"
        });
        
        $(textArea).resizable({
            handles: "all"
        });

        //Lets you write in the comment box
        textArea.addEventListener("focus", () => {
            if(textArea.innerText === "Write a comment...")
            {
                textArea.innerText = "";
            }
        });
        
    });


    // The constant colors
    const colors = {
        aquatic: '#53edd1',
        floral: '#ff954f',
        girly: '#f587cc',
    }

    // The randomized option
    function randomizedColor()
    {
        let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        return randomColor;
    }


    //Selecting a color background based on the dropdown
    colorSelect.addEventListener('change', function()
    {
        let selectedColor;

        // Picking a random color each time
        if (this.value === 'random')
        {
            selectedColor = randomizedColor();
            console.log('Random color selected:', selectedColor);
        }
        else
        {
            selectedColor = colors[this.value] || 'white';
        }

        document.body.style.backgroundColor = selectedColor;

        // Check if floral theme is chosen
        if(this.value === "floral")
        {
            floralBanner.style.display = "block";
            floralTheme.style.display = "block";

            // Changing the textblock color and displaying it when a theme is chosen
            floralTextBox.style.backgroundColor = "#ff954f";
            floralTextBox.style.display = "block";
        }
        else
        {
            floralBanner.style.display = "none";
            floralTheme.style.display = "none";
            floralTextBox.style.display = "none";
        }
        // Check if aquatic theme is chosen
        if (this.value === "aquatic")
        {
            aquaticBanner.style.display = "block";
            aquaticTheme.style.display = "block";
            aquaticTextBox.style.backgroundColor = "#53edd1";
            aquaticTextBox.style.display = "block";
        }
        else
        {
            aquaticBanner.style.display = "none";
            aquaticTheme.style.display = "none";
            aquaticTextBox.style.display = "none";

        }

        // Check if random is chosen
        if (this.value === "random")
        {
            randomBanner.style.display = "block";
            randomTheme.style.display = "block";
            randomTextBox.style.backgroundColor = randomizedColor();
            randomTextBox.style.display = "block";
        }
        else
        {
            randomBanner.style.display = "none";
            randomTheme.style.display = "none";
            randomTextBox.style.display = "none";
        }
        
        

    });
});


// ---------------------
// IMAGE UPLOAD CODE
// ---------------------

// Javascript to show the image right after it's uploaded
const imageInput = document.getElementById("imageUpload");
const uploadBtn = document.getElementById("imageUploadBtn");
const previewContainer = document.getElementById("previewContainer");

//Uploading button for images
uploadBtn.addEventListener("click", () => {
    imageInput.click();
});


imageInput.addEventListener("change", function(event)
{
    const files = Array.from(event.target.files);
    const theme = document.getElementById("customize").value;

    files.forEach(file => {
        // Create a place to hold each image
        let imgContainer = document.createElement("div");

        // base styling for all uploads
        imgContainer.classList.add("uploadedImgContainer");

        // Creating the image
        const img = document.createElement("img");
        img.src = URL.createObjectURL(file);
        imgContainer.appendChild(img);

        // If floral is chosen using this to put gold frame around
        if (theme === "floral")
        {
            const frameOverlay = document.createElement("div");
            // grabbing goldFrame Class
            frameOverlay.classList.add("goldFrame");
            imgContainer.appendChild(frameOverlay);
            frameOverlay.style.display = "block";

            
            img.onload = () => {
                const displayWidth = img.clientWidth;
                const displayHeight = img.clientHeight;

                frameOverlay.style.width = displayWidth + "px";
                frameOverlay.style.height = displayHeight + "px";

                
                //Using jQuery to make the goldFrame overlay to be resizable and draggable
                $(frameOverlay).draggable({
                    containment: false
                }).resizable({
                    aspectRatio: false,
                    handles: "all"
                });

            };
        }

    if (theme === "aquatic")
    {
        // CHANGE THIS TO FIT THE AQUATIC THEME!!
        const frameOverlay = document.createElement("div");
        // grabbing goldFrame Class
        frameOverlay.classList.add("goldFrame");
        imgContainer.appendChild(frameOverlay);
        frameOverlay.style.display = "block";

            
        img.onload = () => {
            const displayWidth = img.clientWidth;
            const displayHeight = img.clientHeight;

            frameOverlay.style.width = displayWidth + "px";
            frameOverlay.style.height = displayHeight + "px";

                
            //Using jQuery to make the goldFrame overlay to be resizable and draggable
            $(frameOverlay).draggable({
                containment: false
            }).resizable({
                aspectRatio: false,
                handles: "all"
            });

        }
    }
        
    //Check if random has been chosen
    if (theme === "random")
    {
        const frameOverlay = document.createElement("div");
        // grabbing goldFrame Class
        frameOverlay.classList.add("goldFrame");
        imgContainer.appendChild(frameOverlay);
        frameOverlay.style.display = "block";

            
        img.onload = () => {
            const displayWidth = img.clientWidth;
            const displayHeight = img.clientHeight;

            frameOverlay.style.width = displayWidth + "px";
            frameOverlay.style.height = displayHeight + "px";

                
            //Using jQuery to make the goldFrame overlay to be resizable and draggable
            $(frameOverlay).draggable({
                containment: false
            }).resizable({
                aspectRatio: false,
                handles: "all"
            });
        }
    }

        imgContainer.classList.add("image-container");

        // Using JQuery to make the photos resizeable and draggable
        $(imgContainer).draggable({
            containment: false
        }).resizable({
            aspectRatio: false,
            handles: "all"
        })

        // Delete button for images
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "🗑️";
        deleteBtn.classList.add("delete-btn");
        imgContainer.appendChild(deleteBtn);

        //Preview Container for img
        previewContainer.appendChild(imgContainer);

        // hover over img for 3 seconds to delete it
        let timer;
        imgContainer.addEventListener("mouseenter", () =>
        {
            timer = setTimeout(() => {
                deleteBtn.style.display = "flex";
            }, 3000);
        });

        imgContainer.addEventListener("mouseleave", () => 
        {
            clearTimeout(timer);
            deleteBtn.style.display = "none";
        });

        // Deleting img on click
        deleteBtn.addEventListener("click", () =>
        {
            imgContainer.remove();
        });

    });

    imageInput.value = "";
});
