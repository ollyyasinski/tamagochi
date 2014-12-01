var Tamagochi = {
    name: '',
    sleepLevel: 10,
    funLevel: 10,
    hungerLevel: 10,
    initialize: function(name){
        this.name = name;
    },
    isAlive: function(){
        return (this.sleepLevel > 0
        && this.funLevel > 0
        && this.hungerLevel > 0);
    },
    timePasses: function(){
        this.sleepLevel = this.sleepLevel - 1;
        this.funLevel = this.funLevel - 1;
        this.hungerLevel = this.hungerLevel - 1;
    },
    toFeed:function(){
        this.hungerLevel+=2;
    },
    toFun:function(){
        this.funLevel+=2;
    },
    toSleep:function(){
        this.sleepLevel+=2;
    }
};

$(document).ready(function() {
    $("form#name-form").submit(function(event) {
        var name = $("input#name").val();
        $("form#name-form").hide()
        event.preventDefault();
        $(".secondPage").show();
        $("#TamagochiName").append(name);
        var myTamagochi = Object.create(Tamagochi);
        UpdateDOM();
        $("#sleepBtn").click(function(){
            myTamagochi.toSleep();
            myTamagochi.timePasses();
            UpdateDOM();
        });

        $("#hungerBtn").click(function(){
            myTamagochi.toFeed();
            myTamagochi.timePasses();
            UpdateDOM();
        });


        $("#funBtn").click(function(){
            myTamagochi.toFun();
            myTamagochi.timePasses();
            UpdateDOM();
        });
        var UpdateDOM = function(){
            $("#TamagochiFun").text(myTamagochi.funLevel);
            $("#TamagochiHunger").text(myTamagochi.hungerLevel);
            $("#TamagochiSleep").text(myTamagochi.sleepLevel);
            if (myTamagochi.isAlive()=== true){
                $("#Live").text("Alive")
            } else{
                $("#Live").text("Dead")
            }
        }





    });


})
