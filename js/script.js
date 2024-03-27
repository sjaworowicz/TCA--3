function changeImage (fileName){
    let img = document.querySelector("#bannerImage");
    img.setAttribute('src', fileName);
}

const titleChangeJS = document.getElementById("titleChange");
function changeTitle1 (titleChange){
    titleChangeJS.innerHTML = "Why Bees Matter";
}

function changeTitle2 (titleChange){
    titleChangeJS.innerHTML = "Threats to Bees";
}

function changeTitle3 (titleChange){
    titleChangeJS.innerHTML = "How You Can Help";
}

function changeTitle4 (titleChange){
    titleChangeJS.innerHTML = "Get Involved";
}

const paragraphChangeJS = document.getElementById("paragraphchange");
function changeParagraph1 (paragraphchange){
    paragraphChangeJS.innerHTML = "Bees matter in the world because they are important to the environment by being pollinators and producers of honey and medicinal products. If bees weren't around, then we wouldn't have honey nor some medications!";
}

function changeParagraph2 (paragraphchange){
    paragraphChangeJS.innerHTML = "Some threats to bees consist of diseases, parasites, pesticides, longer transportation of colonies, winter survival rates being low, limited floral resources, fluctuations in the honey market, and many more.";
}

function changeParagraph3 (paragraphchange){
    paragraphChangeJS.innerHTML = "Some ways you can help save the bee population from going down is planting bee gardens, providing trees for bees, leaving stems behind, creating bee baths, and there are many more ways to save the bees.";
}

function changeParagraph4 (paragraphchange){
    paragraphChangeJS.innerHTML = "Planting a bee garden can get you started on saving bees. Since their largest threat of not building a garden is land being taken where they need to build homes, plant a bee garden in your backyard, and the bees will have their own land.";
}