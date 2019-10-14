//initial firebase
var firebaseConfig = {
    apiKey: "AIzaSyCRG3ZSkBe9IHoQNLPXTnIYm7fbclf9K_A",
    authDomain: "fastfood-4d4ff.firebaseapp.com",
    databaseURL: "https://fastfood-4d4ff.firebaseio.com",
    projectId: "fastfood-4d4ff",
    storageBucket: "fastfood-4d4ff.appspot.com",
    messagingSenderId: "118590463295",
    appId: "1:118590463295:web:24ae91644a43dd74c0c78a",
    
};
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();


// ดูสถานะการ login
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        //var displayName = user.displayName;
        var email = user.email;
        console.log(email + "signed in");
        // var emailVerified = user.emailVerified;
        // var photoURL = user.photoURL;
        // var isAnonymous = user.isAnonymous;
        // var uid = user.uid;
        // var providerData = user.providerData;
        // ...
    } else {
        console.log("sign out");
        // User is signed out.
        // ...
    }
});

document.addEventListener('init', function (event) {
    var page = event.target;

    if (page.id === 'homePage') {
        console.log("homePage");

        $("#menubtn").click(function () {
            $("#sidemenu")[0].open();
        });

        $("#carousel").empty();
        db.collection("recommended").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

                var item = `
          <ons-carousel-item modifier="nodivider" id="${doc.data().id}" class="recomended_item">
              <div class="thumbnail" style="background-image: url('${doc.data().photoUrl}')">
              </div>
              <div class="recomended_item_title" id="item1_name">${doc.data().name}</div>
          </ons-carousel-item>`

                $("#carousel").append(item);


            });
        });

    }
    if (page.id === 'menuPage') {
        console.log("menuPage");

        $("#login").click(function () {
            $("#content")[0].load("login.html");
            $("#sidemenu")[0].close();
        });

        $("#logout").click(function () {
            //firebase sign out
            firebase.auth().signOut().then(function () {
                // Sign-out successful.
                $("#content")[0].load("login.html");
                $("#sidemenu")[0].close();
            }).catch(function (error) {
                // An error happened.
                console.log(error.message);
            });
        });

        $("#home").click(function () {
            $("#content")[0].load("home.html");
            $("#sidemenu")[0].close();
        });
    }

    if (page.id === 'loginPage') {
        console.log("loginPage");

        $("#signinbtn").click(function () {
            var username = $("#username").val();
            var password = $("#password").val();
            firebase.auth().signInWithEmailAndPassword(username, password).catch(function (error) {

                console.log(error.message);
            });

        })

        $("#backhomebtn").click(function () {
            $("#content")[0].load("home.html");
        });
    }
});













//     if (page.id === "tabbar") {
//         //Code for tabbar
//         $("#menubtn").click(function () {
//             var menu = document.getElementById('menu');
//             menu.open();
//         });
//     }

//     if (page.id === "sidemenu") {
//         //Code for sidemenu
//         $("#login").click(function () {
//             $("#content")[0].load("login.html");  
//             $("#sidemenu")[0].close();   
//           });

//           $("#logout").click(function () {
//             //firebase sign out
//             firebase.auth().signOut().then(function() {
//               // Sign-out successful.
//               $("#content")[0].load("login.html");  
//               $("#sidemenu")[0].close();   
//             }).catch(function(error) {
//               // An error happened.
//               console.log(error.message);
//             });
//           });

//           $("#home").click(function () {
//             $("#content")[0].load("home.html");  
//             $("#sidemenu")[0].close();   
//           });
//     }

//     if (page.id === 'tab1') {
//         //Code for Tab 1
//         $("#btn1").click(function () {
//             ons.notification.alert("Hello");
//         });
//     }

//     if (page.id === "signin") {
//         //Code for tabbar
//         $("#signinbtn").click(function () {
//             var content = document.getElementById('content');
//             content.load('splitter.html')

//         });
//     }

//     if (page.id === "signin") {
//         //Code for tabbar
//         $("#signupbtn").click(function () {
//             var content = document.getElementById('content');
//             content.load('signup.html')

//         });
//     }


//     if (page.id === "signup") {
//         //Code for tabbar
//         $("#createbtn").click(function () {
//             var content = document.getElementById('content');
//             content.load('login.html')

//         });
//     }

//     if (page.id === "shop") {
//         //Code for tabbar
//         $("#listbtn").click(function () {
//             var content = document.getElementById('content'); 
//             content.load('ListStarbuck.html');


//         });
//     }

//     // if (page.id === 'feed') {
//     //     page.querySelector('#listbtn').onclick = function() {
//     //       document.querySelector('#myNavigator').pushPage('ListStarbuck.html', {data: {title: 'Starbuck'}});
//     //     };
//     //   } else if (page.id === 'list') {
//     //     page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
//     //   }
//     // });
//     if (page.id === "list") {
//         //Code for tabbar
//         $("#backbtn").click(function () {
//             var content = document.getElementById('content'); 
//             content.load('tabbar.html');


//         });
//     }

//     if (page.id === "cart") {
//         //Code for tabbar
//         $("#backbtn").click(function () {
//             var content = document.getElementById('content'); 
//             content.load('tabbar.html');


//         });
//     }

//     // document.querySelector('ons-back-button').onClick = function(event) {
//     //     // Reset the whole stack instead of popping 1 page
//     //     document.querySelector('ons-navigator').resetToPage('splitter.html');
//     //   };

//     if (page.id === "list") {
//         //Code for tabbar
//         $("#cfbtn").click(function () {
//             var content = document.getElementById('content'); 
//             content.load('cart1.html');


//         });
//     }


//     if (page.id === "tabhome") {
//         //Code for tabbar
//         $("#fbtn").click(function () {
//             var content = document.getElementById('content'); 
//             content.load('shop1.html');


//         });
//     }

//     if (page.id === "tabhome") {
//         //Code for tabbar
//         $("#bbtn").click(function () {
//             var content = document.getElementById('content'); 
//             content.load('shop1.html');


//         });
//     }
//     if (page.id === "tabhome") {
//         //Code for tabbar
//         $("#dbtn").click(function () {
//             var content = document.getElementById('content'); 
//             content.load('shop1.html');


//         });
//     }
//     if (page.id === "tabhome") {
//         //Code for tabbar
//         $("#vbtn").click(function () {
//             var content = document.getElementById('content'); 
//             content.load('shop1.html');


//         });
//     }

//     if (page.id === "shop") {
//         //Code for tabbar
//         $("#backbtn").click(function () {
//             var content = document.getElementById('content'); 
//             content.load('tabbar.html');


//         });
//     }

//     if (page.id === "cart1") {
//         //Code for tabbar
//         $("#backbtn").click(function () {
//             var content = document.getElementById('content'); 

//             content.load('tabbar.html')



//         });
//     }

//     if (page.id === "shop1") {
//         //Code for tabbar
//         $("#listbtn").click(function () {
//             var content = document.getElementById('content'); 

//             content.load('ListStarbuck.html')



//         });
//     }


//     if (page.id === "shop1") {
//         //Code for tabbar
//         $("#backbtn").click(function () {
//             var content = document.getElementById('content'); 

//             content.load('tabbar.html')



//         });
//     }


// });





