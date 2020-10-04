function writeLogo(){
document.write("      <div id=\"logo\">");
document.write("        <div id=\"logo_text\">");
document.write("          <h1><a href=\"index.html\"><img src=\"style/newt-logo.png\" width=140 alt=\"newt\"><span class=\"logo_colour\">&nbsp;&nbsp;Pathways Simplified</span></a></h1>");
document.write("          <h2><b>View, design, and analyze pathways in SBGN and more...</b></h2>");
document.write("        </div>");
document.write("      </div>");
}

function writeMenubar(selected){
document.write("      <div id=\"menubar\">");
document.write("        <ul id=\"menu\">");
if (selected==1) document.write("<li class=\"selected\">"); else document.write("<li>");
document.write("          <a href=\"index.html\">Home</a></li>");
if (selected==2) document.write("<li class=\"selected\">"); else document.write("<li>");
document.write("          <a href=\"software.html\">Software</a></li>");
if (selected==3) document.write("<li class=\"selected\">"); else document.write("<li>");
document.write("          <a href=\"gallery.html\">Gallery</a></li>");
if (selected==4) document.write("<li class=\"selected\">"); else document.write("<li>");
document.write("          <a href=\"tutorials.html\">Tutorials</a></li>");
if (selected==5) document.write("<li class=\"selected\">"); else document.write("<li>");
document.write("          <a href=\"faq.html\">FAQ</a></li>");
if (selected==6) document.write("<li class=\"selected\">"); else document.write("<li>");
document.write("          <a href=\"contact.html\">Contact Us</a></li>");
document.write("        </ul>");
document.write("      </div>");
}

function writeFooter(){
document.write("    <div id=\"footer\">");
document.write("      Copyright &copy; <a href=\"http://www.cs.bilkent.edu.tr/~ivis/\">i-Vis Research Lab</a> | <a href=\"https://github.com/iVis-at-Bilkent/newt\" target=\"_blank\"><img src=\"images/github.png\" alt=\"GitHub\" height=12px> Github</a> | <a href=\"https://twitter.com/newteditor\" target=\"_blank\"><img alt=\"twitter\" src=\"images/twitter.png\" height=12px> Twitter</a> | <a href=\"http://sbgn.github.io/sbgn/\" target=\"_blank\">SBGN</a> | <a href=\"http://www.html5webtemplates.co.uk\">Free CSS Templates</a>");
document.write("    </div>");
}

function writeNews(){
document.write("<h3>Search</h3>");
document.write("<gcse:search>");
document.write("</gcse:search>");
document.write("<h3>Latest News</h3>");
document.write("<h4>Newt release</h4>");
document.write("<h5>April 1, 2020</h5>");
document.write("<p>Newt 3.0 was released to include some <a href=\"https://github.com/iVis-at-Bilkent/newt/releases/tag/v3.0.0\">new features</a> such as experiment data overlay, bug fixes, and more.<br /></p>");
document.write("<h4>Newt release</h4>");
document.write("<h5>October 5, 2019</h5>");
document.write("<p>Newt 2.0 was released to include some <a href=\"https://github.com/iVis-at-Bilkent/newt/releases/tag/v2.0.0\">significant improvements</a> such as SIF support, conversion to and from SBML models, interactive validation and fix of PD maps, persistency of user preferences, flexible infobox positioning and styling, map color schemes, and more.<br /></p>");
document.write("<h4>Important update</h4>");
document.write("<h5>June 19, 2018</h5>");
document.write("<p>Newt was updated to include some <a href=\"https://github.com/iVis-at-Bilkent/newt/releases/tag/v1.1.0\">significant improvements</a> such as CellDesigner import/export, node background image support, improved infoboxes, advanced zooming, and more.<br /></p>");
document.write("<h4>Miscellaneous improvements</h4>");
document.write("<h5>January 4, 2018</h5>");
document.write("<p>Newt was updated to include various improvements such as multiple document support, launch with remote URL or URI, and loading AF models with simple tab-delimited text files.<br /></p>");
//document.write("<style> #more {display: none;} </style>");
document.write("<span id=\"dots\"></span><span id=\"more_news\">");
document.write("<h4>Improved layout performance</h4>");
document.write("<h5>November 20, 2017</h5>");
document.write("<p>Newt was updated to include a much faster layout.<br /></p>");
document.write("<h4>Newt released and website launched</h4>");
document.write("<h5>August 28, 2017</h5>");
document.write("<p>Our initial website is up and version 1.0 is now available.<br /></p>");
document.write("</span> <button onclick=\"showMoreNews()\" id=\"more_button\" style=\"padding: 0; border: none; background: none;\">more news \>\>\></button>");
document.write("<h3>Useful Links</h3>");
document.write("<ul>");
document.write("  <li><a href=\"http://sbgn.github.io/sbgn/\" target=\"_blank\">SBGN</a></li>");
document.write("  <li><a href=\"http://js.cytoscape.org/\" target=\"_blank\">Cytoscape.js</a></li>");
document.write("  <li><a href=\"https://sbgnbricks.org//\" target=\"_blank\">SBGN Bricks</a></li>");
document.write("  <li><a href=\"http://www.pathwaycommons.org/\" target=\"_blank\">Pathway Commons</a></li>");
document.write("  <li><a href=\"http://disease-maps.org/\" target=\"_blank\">Disease Maps Project</a></li>");
document.write("  <li><a href=\"https://github.com/iVis-at-Bilkent/newt\" target=\"_blank\">Newt on Github</a></li>");
document.write("  <li><a href=\"https://twitter.com/newteditor\" target=\"_blank\">Newt on Twitter</a></li>");
document.write("  <li><a href=\"http://www.cs.bilkent.edu.tr/~ivis\" target=\"_blank\">i-Vis Research Lab</a></li>");
document.write("</ul>");
}

function showMoreNews() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more_news");
  var btnText = document.getElementById("more_button");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "more news >>>"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "less news <<<"; 
    moreText.style.display = "inline";
  }
}