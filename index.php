<?php
require_once('private/initialize.php');
include(SHARED_PATH . '/head.php');
include(SHARED_PATH . '/header.php');
?>

  <body>
    <main>
      <div class="container-fluid">
        <div id="topStories" class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div id="carouselContain" class="col-lg-8 col-md-8 col-sm-7 col-xs-12">
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
              <!-- Indicators -->
              <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol>

              <!-- Wrapper for slides -->
              <div class="carousel-inner" role="listbox">
                <div class="item active">
                  <img src="/public/images/media_images/big_ten_fall_2016_schedule.png" alt="Flower">
                  <div class="carousel-caption">
                    <h3>Fall 2016 Big Ten Schedule</h3>
                    <p>Purdue looks forward to the 2016 Big Ten Universities rugby season.</p>
                  </div>
                </div>

                <div class="item">
                  <img src="/public/images/media_images/rugby_strength_&_conditioning.jpg" alt="Chania">
                  <div class="carousel-caption">
                    <h3>Training underway for Fall Season</h3>
                    <p>1st Team All-Big Ten Prop Philip Spagnolo leads the team into workouts.</p>
                  </div>
                </div>

                <div class="item">
                  <img src="/public/images/media_images/big_ten_iowa_champions.jpg" alt="Big Ten Champions at Iowa">
                  <div class="carousel-caption">
                    <h3>Purdue takes home the hardware</h3>
                    <p>Purdue earns 1st place at the Iowa Big Ten Qualifiers, winning out in elimination play.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="upcomingScheduleContain" class="col-lg-4 col-md-4 col-sm-5 col-xs-12">
            <div id="scheduleHead">
              <div id="calendarHead" class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                <i id="calIcon" class="fa fa-2x fa-calendar"></i>
              </div>
              <div id="upcomingHead" class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                <div id="upcomingText">
                  Upcoming Matches
                </div>
              </div>
            </div>
            <div id="calendar">
              <div class="calRow col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="leftBlock col-lg-3 col-md-3 col-sm-3 col-xs-3">
                  <div class="teamLogo">
                    <img src="res\logos\michigan-state-logo.png">
                  </div>
                </div>
                <div class="rightBlock col-lg-9 col-md-9 col-sm-9 col-xs-9">
                  <div class="opponent">
                    home vs michigan state university
                  </div>
                  <div class="dayDate">
                    saturday, october 8th, 1:00 pm eastern time
                  </div>
                  <div class="location">
                    west lafayette, indiana
                  </div>
                </div>
              </div>
              <div class="calRow col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="leftBlock col-lg-3 col-md-3 col-sm-3 col-xs-3">
                  <div class="teamLogo">
                    <img src="res\logos\minnesota-logo.png">
                  </div>
                </div>
                <div class="rightBlock col-lg-9 col-md-9 col-sm-9 col-xs-9">
                  <div class="opponent">
                    home vs Minnesota
                  </div>
                  <div class="dayDate">
                    saturday, october 22nd, 1:00 pm eastern time
                  </div>
                  <div class="location">
                    west lafayette, indiana
                  </div>
                </div>
              </div>
              <div class="calRow col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="leftBlock col-lg-3 col-md-3 col-sm-3 col-xs-3">
                  <div class="teamLogo">
                    <img src="res\logos\illinois-logo.png">
                  </div>
                </div>
                <div class="rightBlock col-lg-9 col-md-9 col-sm-9 col-xs-9">
                  <div class="opponent">
                    away vs Illinois
                    <div class="dayDate">
                      saturday, october 29th, 1:00 pm central time
                    </div>
                    <div class="location">
                      Champaign, Illinois
                    </div>
                  </div>
                </div>
                <div class="calRow col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="leftBlock col-lg-3 col-md-3 col-sm-3 col-xs-3">
                    <div class="teamLogo">
                      <img src="res\logos\d1a-logo.png">
                    </div>
                  </div>
                  <div class="rightBlock col-lg-9 col-md-9 col-sm-9 col-xs-9">
                    <div class="opponent">
                      Big Ten Finals Match (Opponent TBD)
                    </div>
                    <div class="dayDate">
                      saturday, november 12th, 1:00 pm eastern time
                    </div>
                    <div class="location">
                      Elkhart, indiana
                    </div>
                  </div>
                </div>
                <div class="calRow col-lg-12 col-md-12 col-sm-12 col-xs-12" id="seeFullSchedule">
                  <a href="schedule.html">See Full Schedule >></a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </main>
    <?php include(SHARED_PATH . '/footer.php');?>
  </body>