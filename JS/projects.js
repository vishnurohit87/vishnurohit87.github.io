/*<div class="col-md-4"><!-- Template  --> 
		<h4>My Personal Website - Winter 2016</h4>
		<a data-toggle="modal" data-target="#modal-personalSite">
			<img src="Images/PersonalSite.jpg" class="img-responsive img-rounded margin" style="width:100%" alt="Image" data-toggle="tooltip" title="Click for more info" data-placement="bottom">
		</a>
		<!-- Modal -->
		<div id="modal-personalSite" class="modal fade" role="dialog">
			<div class="modal-dialog">
				<!-- Content -->
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4>My Personal Website</h4>
					</div><!-- /modal-header -->
					<div class="modal-body">
						<p>Halfway into my first year, I realized the importance of a portfolio of sorts to showcase my accomplishments. One of my research colleagues showed me a website he put togther and inspired me to create my own. While I had some past experience with web design, the new site is considerably more advanced than anything I had previously worked on. In order to complete this project, I learned to use Boostrap and jQuery in order to create a simple but attractive portfolio.</p>
					</div><!-- /modal-body -->
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-target="#">View Site</button>
						<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
					</div><!-- /modal-footer-->
				</div><!-- /modal-content -->
			</div><!-- /modal-dialog -->
		</div><!-- /this-modal -->
	</div><!-- /Template -->*/

$("#PROJECTS").ready(function(){
var modalList = [];
var modal;
for(var i = 0; i < modalSaveFile.length; i++){
	//alert(modalSaveFile);
	modal = {
		header:modalSaveFile[i][0],
		id:modalSaveFile[i][1],
		imgSrc:modalSaveFile[i][2],
		description:modalSaveFile[i][3],
		altButtonTxt:modalSaveFile[i][4],
	};
	modalList.push(modal);
}


var numModals = modalList.length;
var numRows = (numModals/3);

/*--------------Create Our Rows--------------------*/
for (var x = 0; x < numRows; x++){
	$("#PROJECTS").append("<div class=\"row\"></div>"); //<div class="row"></div>
}
/*--------------Create Our Cols--------------------*/
for (var x = 0; x < 3; x++){
	$("#PROJECTS .row").append("<div class=\"col-md-4 text-center\"></div>"); //<div class="col-md-4"></div>
}
//alert(modalList.length + " " + numModals);
/*--------------Add the individual modals to each block--------------------*/
for (var x = 1; x <= numModals; x++){
	$("#PROJECTS .row:eq(" + (Math.floor((x-1)/3)) + ") .col-md-4:eq(" + (x%3-1) + ")").append(
		"<h4>" + modalList[numModals-x].header + "</h4>" +
		"<a data-toggle=\"modal\" data-target=\"#modal-" + modalList[numModals-x].id + "\">" + 
		"<img src=\"Images/" + modalList[numModals-x].imgSrc + "\" class=\"img-responsive img-rounded margin\" style=\"width:100%\" alt=\"Image\" data-toggle=\"tooltip\" title=\"" + modalList[numModals-x].altButtonTxt + "\" data-placement=\"bottom\">" +
		"</a>" +
		"<!-- Modal -->" +
		"<div id=\"modal-" + modalList[numModals-x].id + "\" class=\"modal fade\" role=\"dialog\">" +
			"<div class=\"modal-dialog\">" +
				"<!-- Content -->" +
				"<div class=\"modal-content\">" +
					"<div class=\"modal-header\">" +
						"<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>" +
						"<h4>" + modalList[numModals-x].header + "</h4>" + 
					"</div><!-- /modal-header -->" + 
					"<div class=\"modal-body\">" + 
						"<p>" + modalList[numModals-x].description + "</p>" + 
					"</div><!-- /modal-body -->" +
					"<div class=\"modal-footer\">" + 
						"<button type=\"button\" class=\"btn btn-default\" data-target=\"#\">" + modalList[numModals-x].altButtonTxt + "</button>" + 
						"<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>" + 
					"</div><!-- /modal-footer-->" + 
				"</div><!-- /modal-content -->" + 
			"</div><!-- /modal-dialog -->" + 
		"</div><!-- /this-modal -->");	
}
});