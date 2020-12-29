$(document).ready(function(){
    $("#btn").click(function(){
        var article = $("#article");
        var prix = $("#prix");
        var table = $("#table");
        table.append(`
            <tr>
                <td>${article.val()}</td>
                <td>${prix.val()}</td>
                <td><button type="button" class="btn btn-dark edit">edit</button>
                <button type="button" class="btn btn-dark del">del</button> <input type="checkbox" class="check"></td>
            </tr>
        `);
    });
    $(document).on("click",".del", function(){
        // these do the same one like a absolute links and the other like relative 
        //$(this).parent().parent().css("display", "none");
        //$(this).parentsUntil("tr").css("display", "none");
        $(this).parent().parent().remove();
    });
    $(document).on("click", ".check", function(){
       
        $(this).parent().parent().toggleClass("clr");
      /* var test ; 
      if($(this)[0].checked){
           
              test= $(this).parent().parent().css("backgroundColor");
              console.log(test);
            $(this).parent().parent().css("backgroundColor", "lightblue");           
        }
        else{
            $(this).parent().parent().css("backgroundColor","white");
           
        }*/
    });
    $(document).on("click", ".edit")

})