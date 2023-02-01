$("document").ready(function(){
    $('.seasons a').click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        var season = $(this).attr("href");//contents of href attribute of this element
       

        //make the season lower case
        season = season.toLowerCase();

        switch(season){
            case "spring":
                $("#logo").attr("src","images/spring.gif");
                $("#wear").attr("src","images/spring-wear.jpg");
                $("html").css("background-color","#2B7129");
                $(".wear-description").text("Start spring with new and nice clothes!");
            break;

            case "summer":
                $("#logo").attr("src","images/summer.gif");
                $("#wear").attr("src","images/summer-wear.jpg");
                $("html").css("background-color","#EBA52B");
                $("h3.wear-description").text("Start the summer off right with our brand new collection!");
            break;

            case "fall":
                $("#logo").attr("src","images/fall.gif");
                $("#wear").attr("src","images/fall-wear.jpg");
                $("html").css("background-color","#A81124");
                $("h3.wear-description").text("You will fall in love with fall fasion cloths!");
            break;

            case "winter":
                $("#logo").attr("src","images/winter.gif");
                $("#wear").attr("src","images/winter-wear.jpg");
                $("html").css("background-color","#005393");
                $("h3.wear-description").text("Get our nice and warm winter jackets!");
            break;

            default:
                $("#logo").attr("src","images/four-seasons.gif");
                $("#wear").attr("src","images/300x400.png");
                $("html").css("background-color","DDD");
                $("h3.wear-description").text("Come and check our all seasons' outfits!");

        }
    });
});
