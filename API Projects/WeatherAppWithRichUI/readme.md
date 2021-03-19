<!-- FONTS -->
<!-- <link href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Dosis:wght@200&display=swap" rel="stylesheet"> -->
<!-- <link rel="preconnect" href="https://fonts.gstatic.com"> -->

<!-- NAVBAR CODE -->
<div class="cotainer-fuild p-3" id='navbar'>
    <div class="container">
        <div class="row">
            <div class="col-md-4 offset-8">
                <form class="form">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder='Search City'>
                        <div class="input-group-append">
                            <button class="btn btn-secondary" type="button">
                              <i class="fa fa-search"></i>
                            </button>
                          </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>


<!-- modal  -->
<div class='modal fade' id='myModal'>
    <div class="modal-dialog modal-md">
        <div class="modal-content">
            <div class="modal-header">
                <h4>Search City</h4>
            </div>
            <div class="modal-body">
                This is body
            </div>
            <div class="modal-footer">
                <button type='button'>Cancel</button>
                <button type='submit'>Submit</button>  
            </div>
        </div>
    </div>
</div>


<!-- Discarded CSS -->
#myModal{
    border-radius:none!important;
    background:linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), transparent;
}

#myModal .modal-content{
    background-color:transparent;
    border:1px solid gray;
    color:darkgray;
    padding:10px;
}

.modal-content .modal-header,.modal-content .modal-body,.modal-content .modal-footer{
    border-bottom-color:gray!important;
}




<!-- 

    <div class="container-fluid clear-top">
        <div class="row text-light text-center">
          <div class="col border border-light">
              <fig>
                  <img src='http://openweathermap.org/img/wn/10d@2x.png' width = "100" alt='icon not found'>
              </fig>
          </div>
          <div class="col border border-light">
              <fig>
                  <img src='http://openweathermap.org/img/wn/10d@2x.png' width = "100" alt='icon not found'>
              </fig>
          </div>
          <div class="col border border-light">
              <fig>
                  <img src='http://openweathermap.org/img/wn/10d@2x.png' width = "100" alt='icon not found'>
              </fig>
          </div>
          <div class="col border border-light">
              <fig>
                  <img src='http://openweathermap.org/img/wn/10d@2x.png' width = "100" alt='icon not found'>
              </fig>
          </div>
          <div class="col border border-light">
              <fig>
                  <img src='http://openweathermap.org/img/wn/10d@2x.png' width = "100" alt='icon not found'>
              </fig>
          </div>
          <div class="col border border-light">
              <fig>
                  <img src='http://openweathermap.org/img/wn/10d@2x.png' width = "100" alt='icon not found'>
              </fig>
          </div>
          <div class="col border border-light">
              <fig>
                  <img src='http://openweathermap.org/img/wn/10d@2x.png' width = "100" alt='icon not found'>
              </fig>
          </div>
        </div>
      </div>
       -->
    
/* For 7 Columns */
/* @media (min-width: 768px){
    .seven-cols .col-md-1,
    .seven-cols .col-sm-1,
    .seven-cols .col-lg-1  {
      width: 100%;
      *width: 100%;
    }
  }
  
  @media (min-width: 992px) {
    .seven-cols .col-md-1,
    .seven-cols .col-sm-1,
    .seven-cols .col-lg-1 {
      width: 14.285714285714285714285714285714%;
      *width: 14.285714285714285714285714285714%;
    }
  }
  
  /**
   *  The following is not really needed in this case
   *  Only to demonstrate the usage of @media for large screens
   */    
  /*@media (min-width: 1295px) {
    .seven-cols .col-md-1,
    .seven-cols .col-sm-1,
    .seven-cols .col-lg-1 {
      width: 14.285714285714285714285714285714%;
      *width: 14.285714285714285714285714285714%;
    }
  } */



  line-height: 100px;
    height:100px;   
    width:100px;
    /* padding:20px; */
    margin-left:40px;
    vertical-align: middle;
    /* padding:14px;    */
    border-radius:50px;


    
 .mt-5 .col-md-1{
    height:130px;
    border-radius:50%;
    line-height: 120px;
    vertical-align: middle;
    border:9px solid rgba(0,0,0,0.6)
}