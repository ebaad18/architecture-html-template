<script>
    $(document).ready(function(){
      //Add a minus icon to the collapse element that is open by default
        $('.collapse.show').each(function(){
        $(this).parent().find(".fas").removeClass("fa-plus").addClass("fa-minus");
        });
          
      //Toggle plus/minus icon on show/hide of collapse element
      $('.collapse').on('shown.bs.collapse', function(){
        $(this).parent().find(".fas").removeClass("fa-plus").addClass("fa-minus");
      }).on('hidden.bs.collapse', function(){
        $(this).parent().find(".fas").removeClass("fa-minus").addClass("fa-plus");
      });       
    });
</script>