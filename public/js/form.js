$(document).ready(function() {
    //CHECK FOR EXISTING NO RADIO OPTION AND DISABLE TEXTBOXES
    if($('input[name="academic_admin_audit.academic.external"][value="no"]').prop("checked") == true) {
        $('#acad_ext').prop("disabled", true);
		$('#acad_ext').val("");
    }
    if($('input[name="academic_admin_audit.academic.internal"][value="no"]').prop("checked") == true) {
        $('#acad_int').prop("disabled", true);
		$('#acad_int').val("");
    }
    if($('input[name="academic_admin_audit.administrative.external"][value="no"]').prop("checked") == true) {
        $('#adm_ext').prop("disabled", true);
		$('#adm_ext').val("");
    }
    if($('input[name="academic_admin_audit.administrative.internal"][value="no"]').prop("checked") == true) {
        $('#adm_int').prop("disabled", true);
		$('#adm_int').val("");
    }

    //HANDLE RADIO BUTTON CLICKS FOR CLEARING,DISABLING/ENABLING TEXTBOXES
    $('input[name="academic_admin_audit.academic.external"]').click(
		function() {
			if($('input[name="academic_admin_audit.academic.external"][value="yes"]').prop("checked") == true) {
				$('#acad_ext').prop("disabled", false);
			} 
			else {
				$('#acad_ext').prop("disabled", true);
				$('#acad_ext').val("");
			}
		}
    )
    $('input[name="academic_admin_audit.academic.internal"]').click(
		function() {
			if($('input[name="academic_admin_audit.academic.internal"][value="yes"]').prop("checked") == true) {
				$('#acad_int').prop("disabled", false);
			} 
			else {
				$('#acad_int').prop("disabled", true);
				$('#acad_int').val("");
			}
		}
	)
    $('input[name="academic_admin_audit.administrative.external"]').click(
		function() {
			if($('input[name="academic_admin_audit.administrative.external"][value="yes"]').prop("checked") == true) {
				$('#adm_ext').prop("disabled", false);
			} 
			else {
				$('#adm_ext').prop("disabled", true);
				$('#adm_ext').val("");
			}
		}
    )
    $('input[name="academic_admin_audit.administrative.internal"]').click(
		function() {
			if($('input[name="academic_admin_audit.administrative.internal"][value="yes"]').prop("checked") == true) {
				$('#adm_int').prop("disabled", false);
			} 
			else {
				$('#adm_int').prop("disabled", true);
				$('#adm_int').val("");
			}
		}
	)
})