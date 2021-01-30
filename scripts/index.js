welcomFunc();

setInterval(welcomFunc, 1000*20);

function welcomFunc() {
    var date = new Date();
    var hour = date.getHours();
    var cnt = document.getElementById("welcomTitle");
    var bkg = document.getElementById("backgroundDiv");

    if ((hour >= 19 && hour < 24) || (hour == 0 || hour < 6)) {
        cnt.innerText = "Good Evening Dear Guest!";
        bkg.style.backgroundImage="url('../images/evening.png')";

    }
    else if (hour >= 6 && hour < 12) {
        cnt.innerText = "Good Morning Dear Guest!";
        bkg.style.backgroundImage="url('../images/morning.png')";


    }
    else if (hour > 12 && hour < 19) {
        cnt.innerText = "Good Afternoon Dear Guest!";
        bkg.style.backgroundImage="url('../images/afternoon.png')";

    }
}
function showToggle() {
    var nbar = document.getElementById("navbar");
    if (nbar.style.display === "block") {
        nbar.style.display = "none";
    } else {
        nbar.style.display = "block";
    }
  }
  function globalSearch(isFooterText)
  {
    var searchText = "";
      
    var footerSearchInput = document.getElementsByName("footerSearchInput")[0];
    var headerSearchInput = document.getElementsByName("headerSearchInput")[0];

      if(isFooterText === true)
      {
        searchText = footerSearchInput.value.toLowerCase();
      }
      else
      {
        searchText = headerSearchInput.value.toLowerCase();
      }
      if(searchText!=null)
      {
        if(searchText.trim()!=null)
        {
            if(searchText.includes("home") || searchText.includes("index") || searchText.includes("about") || searchText.includes("main"))
            {
                window.location.href = "index.html#about"
            }
            else if(searchText.includes("hour") || searchText.includes("code") || searchText.includes("homework 2") || searchText.includes("project 2"))
            {
                window.location.href = "hourofcode.html"
            }
            else if(searchText.includes("websites") || searchText.includes("how") || searchText.includes("homework 3") || searchText.includes("project 3"))
            {
                window.location.href = "howwebsiteswork.html"
            }
            else if(searchText.includes("robotics")  || searchText.includes("homework 4") || searchText.includes("project 4"))
            {
                window.location.href = "robotics.html"
            }
            else if(searchText.includes("galery")  || searchText.includes("gallery") || searchText.includes("images")|| searchText.includes("photos"))
            {
                window.location.href = "galery.html"
            }
            else if(searchText.includes("hesen")  ||searchText.includes("hasan")  || searchText.includes("naghiyev"))
            {
                window.location.href = "hasan.html"
            }
            else if(searchText.includes("yadiqar")  ||searchText.includes("yadigar")  || searchText.includes("yusifov"))
            {
                window.location.href = "yadigar.html"
            }
            else if(searchText.includes("leman")  ||searchText.includes("laman")  || searchText.includes("aliyeva"))
            {
                window.location.href = "laman.html"
            }
            else if(searchText.includes("aliya")  ||searchText.includes("aliye")  || searchText.includes("huyevnova"))
            {
                window.location.href = "aliya.html"
            }
            else if(searchText.includes("team")  ||searchText.includes("member")  || searchText.includes("members"))
            {
                window.location.href = "index.html#members"
            }
            else
            {
                if(isFooterText === true)
                {
                  footerSearchInput.placeholder = "Nothing found";
                  footerSearchInput.value="";
                  footerSearchInput.blur()
                }
                else
                {
                 headerSearchInput.placeholder = "Nothing found";
                 headerSearchInput.value="";
                 headerSearchInput.blur()
                }
            }
        }
      }
  }
  
// https://images.pexels.com/photos/1424337/pexels-photo-1424337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
// ev
// https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
// af
// https://images.pexels.com/photos/417045/pexels-photo-417045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940