$(document).ready(function(){"use strict";var initialized=false;$(".js-add-to-user-list").click(function(event){$("#modal_add_to_list").modal("show");if(!initialized){AjaxApiRequest.makeGetApiRequest("/api/list/paginated-lists/",function(data){if(data.success){$("#modal_add_to_list .loading").remove();$("#modal_add_to_list .js-simple-paginator-container").html(data.html)}else{Phoenix.Ui.showErrorMessage("Could not load lists");$("#modal_add_to_list").modal("hide")}},function(){Phoenix.Ui.showErrorMessage("Could not load lists");$("#modal_add_to_list").modal("hide")});initialized=true}event.preventDefault()});$("#modal_add_to_list").on("click","tr.js-add-list",function(event){var objectGuid=$("#modal_add_to_list table").data("object-guid");var target=$(event.target);if(!target.is("tr")){target=target.parents("tr")}var listGuid=target.attr("data-ref-id");AjaxApiRequest.makeGetApiRequest("/api/list/"+listGuid+"/add-item/"+objectGuid+"/",function(data){if(data.success){Phoenix.Ui.showSuccessMessage("Successfully added item to list.");$("#modal_add_to_list").modal("hide")}else{Phoenix.Ui.showErrorMessage("Error while adding object to list.");$("#modal_add_to_list").modal("hide")}},function(){Phoenix.Ui.showErrorMessage("Error while adding object to list.");$("#modal_add_to_list").modal("hide")})})});