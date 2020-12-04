		$(function(){
            const loading = $(".loading");

            $(window).on("load",function(){
                loading.remove();
            })
            // 54.로딩 이후에 가로 스크롤 다시 생기도록 설정
            $(window).on('pageshow',function(){
            	$('html,body').css({'overflow-x':'hidden','overflow-y':'visible'});
            	$('body').css('overflow','visible');
            })
            // 20. 캐로셀 옵션 설정
            $('.carousel').carousel({
            	interval : 3000	
            });
            // 38. animatescroll plugin 동작구문
            $('.navbar li:nth-child(1) a').click(function(){
            	$('#feature').animatescroll({padding:120,easing:'easeOutSine'});
            })
            $('.navbar li:nth-child(2) a').click(function(){
            	$('#toystory').animatescroll({padding:80,easing:'easeOutSine'});
            })
            $('.navbar li:nth-child(3) a').click(function(){
            	$('#renderman').animatescroll({padding:150,easing:'easeOutSine'});
            })
            $('.navbar li:nth-child(4) a').click(function(){
            	$('#video').animatescroll({padding:80,easing:'easeOutSine'});
            })
            $('.navbar li:nth-child(5) a').click(function(){
            	$('#about').animatescroll({padding:160,easing:'easeOutSine'});
            })
            $('.navbar li:nth-child(6) a').click(function(){
            	$('#contect').animatescroll({padding:60,easing:'easeOutSine'});
            })
            // 65. waypoint plugin 동작구문
            $('.wp1').waypoint(function(direction){
            	if(direction==='down'){
            		$('.wp1').addClass('animate__animated animate__fadeInUp');
            	}
            },{
            	offset:'90%'
            })
            $('.wp1').waypoint(function(direction){
            	if(direction==='up'){
            		$('.wp1').removeClass('animate__animated animate__fadeInUp');
            	}
            },{
            	offset:'90%'
            })


            $('.wp2').waypoint(function(direction){
            	if(direction==='down'){
            		$('.wp2').addClass('animate__animated animate__fadeInRight');
            	}
            },{
            	offset:'60%'
            })
            $('.wp2').waypoint(function(direction){
            	if(direction==='up'){
            		$('.wp2').removeClass('animate__animated animate__fadeInRight');
            	}
            },{
            	offset:'60%'
            })


            $('.wp3').waypoint(function(direction){
            	if(direction==='down'){
            		$('.wp3').addClass('animate__animated animate__fadeInLeft');
            	}
            },{
            	offset:'60%'
            })
            $('.wp3').waypoint(function(direction){
            	if(direction==='up'){
            		$('.wp3').removeClass('animate__animated animate__fadeInLeft');
            	}
            },{
            	offset:'60%'
            })


            $('.wp4').waypoint(function(direction){
            	if(direction==='down'){
            		$('.wp4').addClass('animate__animated animate__fadeInRight');
            	}
            },{
            	offset:'80%'
            })
            $('.wp4').waypoint(function(direction){
            	if(direction==='up'){
            		$('.wp4').removeClass('animate__animated animate__fadeInRight');
            	}
            },{
            	offset:'60%'
            })


            $('.wp5').waypoint(function(direction){
            	if(direction==='down'){
            		$('.wp5').addClass('animate__animated animate__fadeInLeft');
            	}
            },{
            	offset:'80%'
            })
            $('.wp5').waypoint(function(direction){
            	if(direction==='up'){
            		$('.wp5').removeClass('animate__animated animate__fadeInLeft');
            	}
            },{
            	offset:'60%'
            })


            $('.wp6').waypoint(function(direction){
            	if(direction==='down'){
            		$('.wp6').addClass('animate__animated animate__fadeIn');
            	}
            },{
            	offset:'60%'
            })
            $('.wp6').waypoint(function(direction){
            	if(direction==='up'){
            		$('.wp6').removeClass('animate__animated animate__fadeIn');
            	}
            },{
            	offset:'60%'
            })


            $('.wp7').waypoint(function(direction){
            	if(direction==='down'){
            		$('.wp7').addClass('animate__animated animate__fadeInLeft');
            	}
            },{
            	offset:'90%'
            })
            $('.wp7').waypoint(function(direction){
            	if(direction==='up'){
            		$('.wp7').removeClass('animate__animated animate__fadeInLeft');
            	}
            },{
            	offset:'90%'
            })


            $('.wp8').waypoint(function(direction){
            	if(direction==='down'){
            		$('.wp8').addClass('animate__animated animate__fadeInLeft');
            	}
            },{
            	offset:'70%'
            })
            $('.wp8').waypoint(function(direction){
            	if(direction==='up'){
            		$('.wp8').removeClass('animate__animated animate__fadeInLeft');
            	}
            },{
            	offset:'70%'
            })


            $('.wp9').waypoint(function(direction){
            	if(direction==='down'){
            		$('.wp9').addClass('animate__animated animate__fadeInLeft');
            	}
            },{
            	offset:'50%'
            })
            $('.wp9').waypoint(function(direction){
            	if(direction==='up'){
            		$('.wp9').removeClass('animate__animated animate__fadeInLeft');
            	}
            },{
            	offset:'50%'
            })


            $('.wp10').waypoint(function(direction){
            	if(direction==='down'){
            		$('.wp10').addClass('animate__animated animate__fadeInRight');
            	}
            },{
            	offset:'90%'
            })
            $('.wp10').waypoint(function(direction){
            	if(direction==='up'){
            		$('.wp10').removeClass('animate__animated animate__fadeInRight');
            	}
            },{
            	offset:'90%'
            })


            $('.wp11').waypoint(function(direction){
            	if(direction==='down'){
            		$('.wp11').addClass('animate__animated animate__fadeInRight');
            	}
            },{
            	offset:'70%'
            })
            $('.wp11').waypoint(function(direction){
            	if(direction==='up'){
            		$('.wp11').removeClass('animate__animated animate__fadeInRight');
            	}
            },{
            	offset:'70%'
            })


            $('.wp12').waypoint(function(direction){
            	if(direction==='down'){
            		$('.wp12').addClass('animate__animated animate__fadeInRight');
            	}
            },{
            	offset:'50%'
            })
            $('.wp12').waypoint(function(direction){
            	if(direction==='up'){
            		$('.wp12').removeClass('animate__animated animate__fadeInRight');
            	}
            },{
            	offset:'50%'
            })


            $('.wp13').waypoint(function(direction){
            	if(direction==='down'){
            		$('.wp13').addClass('animate__animated animate__fadeInLeft');
            	}
            },{
            	offset:'90%'
            })
            $('.wp13').waypoint(function(direction){
            	if(direction==='up'){
            		$('.wp13').removeClass('animate__animated animate__fadeInLeft');
            	}
            },{
            	offset:'90%'
            })


            $('.wp14').waypoint(function(direction){
            	if(direction==='down'){
            		$('.wp14').addClass('animate__animated animate__fadeInLeft');
            	}
            },{
            	offset:'70%'
            })
            $('.wp14').waypoint(function(direction){
            	if(direction==='up'){
            		$('.wp14').removeClass('animate__animated animate__fadeInLeft');
            	}
            },{
            	offset:'70%'
            })


            $('.wp15').waypoint(function(direction){
            	if(direction==='down'){
            		$('.wp15').addClass('animate__animated animate__fadeInLeft');
            	}
            },{
            	offset:'50%'
            })
            $('.wp15').waypoint(function(direction){
            	if(direction==='up'){
            		$('.wp15').removeClass('animate__animated animate__fadeInLeft');
            	}
            },{
            	offset:'50%'
            })


            $('.wp16').waypoint(function(direction){
            	if(direction==='down'){
            		$('.wp16').addClass('animate__animated animate__fadeIn');
            	}
            },{
            	offset:'80%'
            })
            $('.wp16').waypoint(function(direction){
            	if(direction==='up'){
            		$('.wp16').removeClass('animate__animated animate__fadeIn');
            	}
            },{
            	offset:'80%'
            })



            $('.wp17').waypoint(function(direction){
            	if(direction==='down'){
            		$('.wp17').addClass('animate__animated animate__fadeIn');
            	}
            },{
            	offset:'80%'
            })
            $('.wp17').waypoint(function(direction){
            	if(direction==='up'){
            		$('.wp17').removeClass('animate__animated animate__fadeIn');
            	}
            },{
            	offset:'80%'
            })


            $('.wp18').waypoint(function(direction){
                  if(direction==='down'){
                        $('.wp18').addClass('animate__animated animate__slideInUp');
                  }
            },{
                  offset:'80%'
            })
            $('.wp18').waypoint(function(direction){
                  if(direction==='up'){
                        $('.wp18').removeClass('animate__animated animate__slideInUp');
                  }
            },{
                  offset:'80%'
            })



            $('.wp19').waypoint(function(direction){
                  if(direction==='down'){
                        $('.wp19').addClass('animate__animated animate__slideInUp');
                  }
            },{
                  offset:'80%'
            })
            $('.wp19').waypoint(function(direction){
                  if(direction==='up'){
                        $('.wp19').removeClass('animate__animated animate__slideInUp');
                  }
            },{
                  offset:'80%'
            })



            $('.wp20').waypoint(function(direction){
                  if(direction==='down'){
                        $('.wp20').addClass('animate__animated animate__fadeIn');
                  }
            },{
                  offset:'70%'
            })
            $('.wp20').waypoint(function(direction){
                  if(direction==='up'){
                        $('.wp20').removeClass('animate__animated animate__fadeIn');
                  }
            },{
                  offset:'70%'
            })



            $('.wp21').waypoint(function(direction){
                  if(direction==='down'){
                        $('.wp21').addClass('animate__animated animate__fadeIn');
                  }
            },{
                  offset:'70%'
            })
            $('.wp21').waypoint(function(direction){
                  if(direction==='up'){
                        $('.wp21').removeClass('animate__animated animate__fadeIn');
                  }
            },{
                  offset:'70%'
            })



             $('.wp22').waypoint(function(direction){
                  if(direction==='down'){
                        $('.wp22').addClass('animate__animated animate__fadeIn');
                  }
            },{
                  offset:'70%'
            })
            $('.wp22').waypoint(function(direction){
                  if(direction==='up'){
                        $('.wp22').removeClass('animate__animated animate__fadeIn');
                  }
            },{
                  offset:'70%'
            })



             $('.wp23').waypoint(function(direction){
                  if(direction==='down'){
                        $('.wp23').addClass('animate__animated animate__zoomIn');
                  }
            },{
                  offset:'70%'
            })
            $('.wp23').waypoint(function(direction){
                  if(direction==='up'){
                        $('.wp23').removeClass('animate__animated animate__zoomIn');
                  }
            },{
                  offset:'70%'
            })



            $('.wp24').waypoint(function(direction){
                  if(direction==='down'){
                        $('.wp24').addClass('animate__animated animate__fadeInRight');
                  }
            },{
                  offset:'90%'
            })
            $('.wp24').waypoint(function(direction){
                  if(direction==='up'){
                        $('.wp24').removeClass('animate__animated animate__fadeInRight');
                  }
            },{
                  offset:'90%'
            })



            $('.wp25').waypoint(function(direction){
                  if(direction==='down'){
                        $('.wp25').addClass('animate__animated animate__fadeInRight');
                  }
            },{
                  offset:'80%'
            })
            $('.wp25').waypoint(function(direction){
                  if(direction==='up'){
                        $('.wp25').removeClass('animate__animated animate__fadeInRight');
                  }
            },{
                  offset:'80%'
            })




            $('.wp26').waypoint(function(direction){
                  if(direction==='down'){
                        $('.wp26').addClass('animate__animated animate__fadeInRight');
                  }
            },{
                  offset:'70%'
            })
            $('.wp26').waypoint(function(direction){
                  if(direction==='up'){
                        $('.wp26').removeClass('animate__animated animate__fadeInRight');
                  }
            },{
                  offset:'70%'
            })




            $('.wp27').waypoint(function(direction){
                  if(direction==='down'){
                        $('.wp27').addClass('animate__animated animate__fadeInRight');
                  }
            },{
                  offset:'60%'
            })
            $('.wp27').waypoint(function(direction){
                  if(direction==='up'){
                        $('.wp27').removeClass('animate__animated animate__fadeInRight');
                  }
            },{
                  offset:'60%'
            })



            $('.wp28').waypoint(function(direction){
                  if(direction==='down'){
                        $('.wp28').addClass('animate__animated animate__fadeInLeft');
                  }
            },{
                  offset:'70%'
            })
            $('.wp28').waypoint(function(direction){
                  if(direction==='up'){
                        $('.wp28').removeClass('animate__animated animate__fadeInLeft');
                  }
            },{
                  offset:'70%'
            })



            $('.wp29').waypoint(function(direction){
                  if(direction==='down'){
                        $('.wp29').addClass('animate__animated animate__fadeInRight');
                  }
            },{
                  offset:'70%'
            })
            $('.wp29').waypoint(function(direction){
                  if(direction==='up'){
                        $('.wp29').removeClass('animate__animated animate__fadeInRight');
                  }
            },{
                  offset:'70%'
            })
        })

