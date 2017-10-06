$(document).ready(function(){
 $('.deleteUser').on('click',deleteUser);
});

function deleteUser(){
  var conformation = confirm("Are You Sure");
  if(conformation){
     $.ajax({
       type:'DELETE',
       url:'/users/delete/'+$(this).data('id'),
       success : function(response) {

        if ( response === 'error' ) {

            alert('crap!');

        } else if (response === 'success' ) {

            window.location.replace('/');

        }
  }
});
}
  else{
    return false;
  }
}
