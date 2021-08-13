<template>
  <div class="container">
    <div class="content-wrapper">
      <div class="row justify-content-center w-100">
        <div class="col-lg-10">
          <div class="tab-header">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active"
                        data-bs-toggle="tab"
                        data-bs-target="#liveAndUpcoming"
                        type="button"
                        aria-selected="true">
                  Live & Upcoming
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#result"
                        type="button"
                        aria-selected="false">
                  Result
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#calendar"
                        type="button"
                        aria-selected="false">
                  Calendar
                </button>
              </li>
            </ul>
            <ul class="nav">
              <li>
                <div class="dropdown me-2">
                  <button class="btn dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false">
                    International
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <div class="dropdown">
                  <button class="btn dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false">
                    Dropdown button
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="liveAndUpcoming">
              <div class="d-flex flex-wrap align-items-center justify-content-between items-row">
                <div class="column">
                  <a href="#" class="text-uppercase d-inline-flex align-items-center">
                    <span>LIVE</span> 2ND TEST
                  </a>
                </div>
                <div class="column flex-shrink-0">
                  <div class="text-center mb-2">
                    <p class="small mb-0">Lord's, London, London</p>
                    <p class="small mb-0">12 Aug, 21 Local Time, London, London</p>
                  </div>
                  <div class="d-flex align-items-center">
                    <div class="d-inline-flex align-items-center">
                      <div class="text-end me-3">
                        <p class="fw-bold mb-0">England</p>
                        <h5 class="mb-0">*276/3 (90 ov)</h5>
                      </div>
                      <img src="" class="img-fluid" width="40" height="40" alt="">
                    </div>
                    <p class="fw-bold mx-3 mb-0">VS</p>
                    <div class="d-inline-flex align-items-center">
                      <img src="img/india.png" class="img-fluid" width="40" height="40" alt="">
                      <div class="ms-3">
                        <p class="fw-bold mb-0">India</p>
                        <h5 class="mb-0">Not yet Bat</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <h6 class="fw-bolder mb-0">4:15 PM</h6>
                </div>
              </div>

              <div class="text-center mt-4">
                <button type="button" class="btn btn-load-more">LOAD MORE +</button>
              </div>
            </div>
            <div class="tab-pane fade" id="result">
              <div class="d-flex flex-column align-items-center justify-content-center" style="min-height: 450px;">
                <img src="img/empty.png" class="img-fluid" width="350" alt="">
                <h2 class="text-center">This area of the page is under construction</h2>
              </div>
            </div>
            <div class="tab-pane fade" id="calendar">
              <div class="d-flex flex-column align-items-center justify-content-center" style="min-height: 450px;">
                <img src="img/empty.png" class="img-fluid" width="350" alt="">
                <h2 class="text-center">This area of the page is under construction</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Navigation",
}
</script>