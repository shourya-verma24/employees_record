let myform = document.querySelector("form")
let nam = document.getElementById("name")
let employeeID = document.getElementById("employeeID")
let dep = document.getElementById("department")
let exp = document.getElementById("exp")
let mail = document.getElementById("email")
let mobile = document.getElementById("mbl")
let tbody = document.querySelector("tbody")
let alldata = []

myform.addEventListener("submit", function(e)
                        {
                          e.preventDefault()
                          let obj= {}
                          obj.name = nam.value
                          obj.employwwID = employeeID.value
                          obj.dep = dep.value
                          obj.exp = exp.value
                          obj.mail=mail.value
                          obj.mobile=mobile.value
                          
                          alldata.push(obj)
                          tbody.innerHTML = null;
                          //console.log(alldata)
                          alldata.map((ele) =>{
                            let row = document.createElement("tr")
                            let tdname = document.createElement("td")
                            let tdempID = document.createElement("td")
                            let tddep= document.createElement("td")
                            let tdexp = document.createElement("td")
                            let tdmail =document.createElement("td")
                            let tdmobil = document.createElement("td")
                            let tdrole = document.createElement("td")
                            let tddel = document.createElement("td")
                            let button = document.createElement("button")
                            button.type = "button"
                            button.value = "Delete"
                            button.oneClick = function(){
                              var rowa = this.parentNode.parentNode;
                              rowa.parentNode.removeChild(rowa);
                            }
                            tddel.appendChild(button)
                            
                            if (ele.exp>5){
                              tdrole.innerText = "Senior"
                            }
                            else if (ele.exp<5 && ele.exp>3){
                              tdrole.innerText = "Junior"}
                            else{
                              tdrole.innerText = "Fresher"
                            }                            
                            tdname.innerText = ele.name
                            tdempID.innerText = ele.employwwID
                            tddep.innerText = ele.dep
                            tdexp.innerText = ele.exp
                            tdmail.innerText = ele.mail
                            tdmobil.innerText = ele.mobile

                            row.append(tdname,tdempID,tddep,tdexp,tdmail,tdmobil,tdrole,tddel)
                            tbody.append(row)
                            
                          })
                        })


