//搜索框内同宽
      var button = document.getElementById("btn");
      var input = document.getElementById("inp");
      var buttonWidth = button.offsetWidth;
      input.style.width = buttonWidth - 4 + "px";
      //搜索操作的完成
      document.getElementById("btn").addEventListener("click", function () {
        //获取搜索框内容
        var tet = document.getElementById("inp").value;
        //隐藏除d1外的卡片
        var allElements = document.getElementById("main").children;
        for (var i = 0; i < allElements.length; i++) {
          var element = allElements[i];
          if (element.id !== "d1") {
            element.style.display = "none";
          }
        }
        //条件判断
        switch (tet) {
          //如果是康炳一
          case "康炳一":
            document.getElementById("d1").getElementsByTagName("img")[0].src =
              "./康炳一.png";
            document.querySelector("p").innerText = "康 炳 一";
            break;
          //如果是赵浩钧
          case "赵浩钧":
            document.getElementById("d1").getElementsByTagName("img")[0].src =
              "./赵浩钧.png";
            document.querySelector("p").innerText = "赵 浩 钧";
            break;
          //如果是张铁林
          case "张铁林":
            document.getElementById("d1").getElementsByTagName("img")[0].src =
              "./张铁林.png";
            document.querySelector("p").innerText = "张 铁 林";
            break;
          //如果是张铁林
          case "许明杰":
            document.getElementById("d1").getElementsByTagName("img")[0].src =
              "./许明杰.jpg";
            document.querySelector("p").innerText = "许 明 杰";
            break;
          //狗都不是
          default:
            alert("别查了 这斯人还没登记");
        }
      }); //点击事件的添加  与执行的操作
      //重新加载的完成
      document.getElementById("clear").addEventListener("click", function () {
        location.reload();
      });