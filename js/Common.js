// for showing catagoris in phone
    let NavCaragoris = document.querySelector(".NavCaragoris");
    
    function HideMiniNev(){
        NavCaragoris.style.display = "none";
    }

    function ShowMiniNev(){
        NavCaragoris.style.display = "block";
    }

// for dropdown menu in phone
    let DropDown = document.querySelector(".DeopDownMenuMobiel");
    DropDown.style.display = "none";
    let isTrue = true;

    function showDropdown(){
        if(isTrue){
            DropDown.style.display = "block";
            isTrue = false;
        }else{
            DropDown.style.display = "none";
            isTrue = true;
        }

    }

// For scorole efect

    window.addEventListener('scroll', () => {
        let TopNev = document.querySelector('.TopNev');
        let MidNev = document.querySelector('.MidNev');
        let BottomNev = document.querySelector('.BottomNev');
        let CatagorisIcinHide = document.querySelector('.CatagorisIcinHide');
        let CatagorisIcinHide2 = document.querySelector('.CatagorisIcinHide2');
        CatagorisIcinHide.style.display= "none";

        if (window.scrollY > 300) {
            TopNev.style.display = 'none';
            MidNev.style.display = 'none';
            BottomNev.style.background = "rgba(216,216,216,1)";
            CatagorisIcinHide.style.display= "block";
            CatagorisIcinHide2.style.display= "none";
        } else {
            TopNev.style.display = 'block';
            MidNev.style.display = 'block';
            BottomNev.style.background = "white";
            CatagorisIcinHide.style.display= "none";
            CatagorisIcinHide2.style.display= "block";
        }
    })

    // hdie and show ctagoris in scrole
    let CatagorisIcinHide111 = document.querySelector(".CatagorisIcinHide");
    CatagorisIcinHide111.addEventListener("click", function() {
        document.getElementById("NavClickAction").style.display = "block";
        document.getElementById("CatagorisIcinHide").style.display = "none";
        document.getElementById("CatagorisIcinHideCros").style.display = "block";
    });

    let CatagorisIcinHideCros2222 = document.querySelector(".CatagorisIcinHideCros");
    CatagorisIcinHideCros2222.addEventListener("click", function() {
        document.getElementById("NavClickAction").style.display = "none";
        document.getElementById("CatagorisIcinHide").style.display = "block";
        document.getElementById("CatagorisIcinHideCros").style.display = "none";
    });


    // order page
    let ProceedToCheckout1 = document.querySelector(".ProceedToCheckout");
    ProceedToCheckout1.addEventListener("click", function() {
        document.getElementById("cartTab").style.display = "none";
        document.getElementById("checkOutTab").style.display = "block";
    });

    // order page
    let PalceOrder1 = document.querySelector(".PalceOrder");
    PalceOrder1.addEventListener("click", function() {
        document.getElementById("checkOutTab").style.display = "none";
        document.getElementById("orderCompletedTab").style.display = "block";
    });


    // login page hide show
    let registBtn = document.getElementById("RegistBtnLogin");
    function loginSing(){
        let LoginDiv = document.querySelector(".LoginDiv");
        let SingDiv = document.querySelector(".SingDiv");
        LoginDiv.style.display = "none";
        SingDiv.style.display = "block";
    }

    // singin
    let LoginBtn = document.querySelector(".LoginBtn");
    function loginSingup(){
        let LoginDiv = document.querySelector(".LoginDiv");
        let SingDiv = document.querySelector(".SingDiv");
        let ForgotBtn = document.querySelector(".ForgotPassowrdDiv");
        LoginDiv.style.display = "block";
        SingDiv.style.display = "none";
        ForgotBtn.style.display = "none";
    }
    
    // Forgot
    let ForgotBtn = document.querySelector(".ForGotBtn");
    function prgothide(){
        let LoginDiv = document.querySelector(".LoginDiv");
        let ForgotBtn = document.querySelector(".ForgotPassowrdDiv");
        LoginDiv.style.display = "block";
        ForgotBtn.style.display = "none";
    }
    // Forgot
    let ForgotShowcli = document.querySelector(".ForgotShowcli");
    function ForgotShow(){
        let LoginDiv = document.querySelector(".LoginDiv");
        let ForgotBtn = document.querySelector(".ForgotPassowrdDiv");
        LoginDiv.style.display = "none";
        ForgotBtn.style.display = "block";
    }

    // Address addd show  AddAdressBtnO
    function FunAddAdressBtnO(){
        let addressInfoFrom = document.querySelector(".addressInfoFrom");
        let collectedAddressA = document.querySelector(".collectedAddress");
        collectedAddressA.style.display = "none";
        addressInfoFrom.style.display = "block";
    }
    
    function FunaddressInfoFrom(){
        let addressInfoFrom = document.querySelector(".addressInfoFrom");
        let collectedAddressA = document.querySelector(".collectedAddress");
        collectedAddressA.style.display = "block";
        addressInfoFrom.style.display = "none";
    }

    

    // Address addd show  AddAdressBtnO
    // function EmaleChangeFun(){
    //     let EmaoChange = document.querySelector("#EmaoChange");
    //     let PassowardChange = document.querySelector("#PassowardChange");
    //     PassowardChange.style.display = "none !important" ;
    //     EmaoChange.style.display = "block !important";
    // }
    
    // function PasswordhendlerFun(){
    //     let EmaoChange = document.querySelector("#EmaoChange");
    //     let PassowardChange = document.querySelector("#PassowardChange");
    //     PassowardChange.style.display = "block !important";
    //     EmaoChange.style.display = "none !important";
    // }

