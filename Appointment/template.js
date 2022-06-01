module.exports = (data) => {
    return `
    <!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <title>Bike Rental Contract</title>
    <style>
        html{
            font-size: small;
        }
        .bold{
            font-weight: 500;
        }
        .title{
            font-size: 2rem;
            font-weight: 600;
        }
    </style>
  </head>
  <body>
  <header class="container d-flex justify-content-center align-items-center my-2" style="gap: 1rem;">
    <div style="width: 100px;">
      <img src="http://localhost:8080/bot_circle.png" alt="BOT Logo" width="100%">
    </div>
    <div>
      <span class="title">Be On Time</span>
    </div>
    </header>
    <main>
        <div class="text-center pt-2">
            <h4>BeOnTime - A valley of Rental Bikes</h4>
        </div>
        <section class="container-fluid">
            <div class="border p-2">
                <h5>Hirer</h5>
                <table class="table table-bordered">
                    <tr>
                        <td>
                            <span class="bold">Name : </span> ${data.name}
                        </td>
                        <td>
                            <span class="bold">Mobile : </span> ${data.mobile}
                        </td>
                        <td>
                            <span class="bold">Father : </span> ${data.father}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span class="bold">Father's Mobile : </span> ${data.fMobile}
                        </td>
                        <td>
                            <span class="bold">Adhaar : </span> ${data.adhaar}
                        </td>
                        <td>
                            <span class="bold">Driving Licence : </span> ${data.licence}
                        </td>
                    </tr>
                </table>
            </div>
        </section>
        <section class="container-fluid">
            <div class="border p-2">
                <h5>Booking Details</h5>
                <table class="table table-bordered">
                    <tr>
                        <td>
                            <span class="bold">To Time : </span> ${data.tTime}
                        </td>
                        <td>
                            <span class="bold">From Date : </span> ${data.fdate}
                        </td>
                        <td>
                            <span class="bold">Vehicle : </span> ${data.vehicle}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span class="bold">To Date : </span> ${data.tdate}
                        </td>
                        <td>
                            <span class="bold">From Time : </span> ${data.fTime}
                        </td>
                        <td class="d-flex" style="gap: 1rem;">
                            <span class="bold">Returned on Time : </span> 
                            <span class="d-flex" style="gap: 1rem;">
                                <label class="d-flex align-items-center" style="width: 50px; gap: 10px;">
                                    <input type="radio" class="form-check"> Y
                                </label>
                                <label class="d-flex align-items-center" style="width: 50px; gap: 10px;">
                                    <input type="radio" class="form-check"> N
                                </label>
                            </span>
                        </td>
                    </tr>
                </table>
            </div>
        </section>
        <section class="container-fluid">
            <div class="border p-2">
                <h5>Address</h5>
                <table class="table table-bordered">
                    <tr>
                        <td>
                            <span class="bold">Temprory : </span> ${data.tAddress}
                        </td>
                        <td>
                            <span class="bold">Permanent : </span> ${data.pAddress}
                        </td>
                    </tr>
                </table>
            </div>
        </section>
        <section class="container-fluid">
            <div class="border p-2">
                <h5>Vehicle Inspection (Before)</h5>
                <table class="table table-bordered">
                    <tr>
                        <td>
                            <span class="bold">Cleanliness : </span> ${data.clean}
                        </td>
                        <td>
                            <span class="bold">Fuel Level : </span> ${data.fuelLevel} Ltr
                        </td>
                        <td>
                            <span class="bold">Mirror : </span> ${data.mirror === 'N' ? "Not Ok" : "Ok"}
                        </td>
                        <td>
                            <span class="bold">Foot Rest : </span> ${data.footRest === 'NW' ? "Not Ok" : "Ok"}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span class="bold">Mat : </span> ${data.mat === 'N' ? "Not Ok" : "Ok"}
                        </td>
                        <td>
                            <span class="bold">Cables : </span> ${data.cable === 'N' ? "Not Ok" : "Ok"}
                        </td>
                        <td>
                            <span class="bold">Battery : </span> ${data.battery === 'NW' ? "Not Ok" : "Ok"}
                        </td>
                        <td>
                            <span class="bold">Self Start : </span> ${data.selfStart === 'NW' ? "Not Ok" : "Ok"}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span class="bold">Medical Kit : </span> ${data.medkit === 'Y' ? "Yes" : "No"}
                        </td>
                        <td>
                            <span class="bold">Toolkit : </span> ${data.toolkit === 'Y' ? "Yes" : "No"}
                        </td>
                        <td>
                            <span class="bold">Helmet : </span> ${data.helmet === 'Y' ? "Yes" : "No"}
                        </td>
                        <td>
                            <span class="bold">Body Noise : </span> ${data.bodyNoise === 'Y' ? "Yes" : "No"}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span class="bold">Engine Noise : </span> ${data.engineNoise === 'Y' ? "Yes" : "No"}
                        </td>
                        <td>
                            <span class="bold">Number Plate : </span> ${data.numberPlate === 'Y' ? "Yes" : "No"}
                        </td>
                    </tr>
                </table>
                <table class="table table-bordered">
                    <tr>
                        <td>
                            <span class="bold">Head Lights : </span> ${data.headlight === 'NW' ? "Not Ok" : "Ok"}
                        </td>
                        <td>
                            <span class="bold">Break Lights : </span> ${data.headlight === 'NW' ? "Not Ok" : "Ok"}
                        </td>
                        <td>
                            <span class="bold">Indicators : </span> ${data.indicator === 'NW' ? "Not Ok" : "Ok"}
                        </td>
                        <td>
                            <span class="bold">Fog Lights : </span> ${data.foglight === 'NW' ? "Not Ok" : "Ok"}
                        </td>
                    </tr>
                </table>
                <table class="table table-bordered">
                    <tr>
                        <td>
                            <span class="bold">Front Breaks : </span> ${data.frontBreak === 'NW' ? "Not Ok" : "Ok"}
                        </td>
                        <td>
                            <span class="bold">Rear Breaks : </span> ${data.rearBreak === 'NW' ? "Not Ok" : "Ok"}
                        </td>
                    </tr>
                </table>
            </div>
        </section>
        <section class="container-fluid">
            <div class="border p-2">
                <h5>Vehicle Inspection (After)</h5>
                <div class="d-flex flex-wrap">
                    <div class="col-6 d-flex p-0" style="gap: 10px;">
                        <span class="bold">Cleanliness</span>
                        <span class="d-flex p-0" style="gap: 5px;">
                            <label class="d-flex align-items-center" style="width: 50px; gap: 10px;">
                                <input type="radio" class="form-check"> 1
                            </label>
                            <label class="d-flex align-items-center" style="width: 50px; gap: 10px;">
                                <input type="radio" class="form-check"> 2
                            </label>
                            <label class="d-flex align-items-center" style="width: 50px; gap: 10px;">
                                <input type="radio" class="form-check"> 3
                            </label>
                            <label class="d-flex align-items-center" style="width: 50px; gap: 10px;">
                                <input type="radio" class="form-check"> 4
                            </label>
                            <label class="d-flex align-items-center" style="width: 50px; gap: 10px;">
                                <input type="radio" class="form-check"> 5
                            </label>
                        </span>
                    </div>
                    <div class="col-3 p-0 d-flex">
                        <span class="bold">Fuel Level : </span> <span class="mx-3"></span> <span>Ltr</span>
                    </div>
                    <div class="col-3 p-0 d-flex" style="gap: 10px;">
                        <span class="bold">Mirror : </span>
                        <span class="d-flex" style="gap: 5px;">
                            <label class="d-flex align-items-center" style="width: 50px; gap: 10px;">
                                <input type="radio" class="form-check"> Ok
                            </label>
                            <label class="d-flex align-items-center" style="width: 70px; gap: 10px;">
                                <input type="radio" class="form-check"> Not Ok
                            </label>
                        </span>
                    </div>
                    <div class="col-3 p-0 d-flex" style="gap: 10px;">
                        <span class="bold">Foot Rest : </span>
                        <span class="d-flex" style="gap: 5px;">
                            <label class="d-flex align-items-center" style="width: 50px; gap: 10px;">
                                <input type="radio" class="form-check"> Ok
                            </label>
                            <label class="d-flex align-items-center" style="width: 70px; gap: 10px;">
                                <input type="radio" class="form-check"> Not Ok
                            </label>
                        </span>
                    </div>
                </div>
                <div class="d-flex">
                    <div class="col-3 p-0 d-flex" style="gap: 10px;">
                        <span class="bold">Headlights : </span>
                        <span class="d-flex" style="gap: 5px;">
                            <label class="d-flex align-items-center" style="width: 50px; gap: 10px;">
                                <input type="radio" class="form-check"> Ok
                            </label>
                            <label class="d-flex align-items-center" style="width: 70px; gap: 10px;">
                                <input type="radio" class="form-check"> Not Ok
                            </label>
                        </span>
                    </div>
                    <div class="col-3 p-0 d-flex" style="gap: 10px;">
                        <span class="bold">Break Lights : </span>
                        <span class="d-flex" style="gap: 5px;">
                            <label class="d-flex align-items-center" style="width: 50px; gap: 10px;">
                                <input type="radio" class="form-check"> Ok
                            </label>
                            <label class="d-flex align-items-center" style="width: 70px; gap: 10px;">
                                <input type="radio" class="form-check"> Not Ok
                            </label>
                        </span>
                    </div>
                    <div class="col-3 p-0 d-flex" style="gap: 10px;">
                        <span class="bold">Fog Lights : </span>
                        <span class="d-flex" style="gap: 5px;">
                            <label class="d-flex align-items-center" style="width: 50px; gap: 10px;">
                                <input type="radio" class="form-check"> Ok
                            </label>
                            <label class="d-flex align-items-center" style="width: 70px; gap: 10px;">
                                <input type="radio" class="form-check"> Not Ok
                            </label>
                        </span>
                    </div>
                    <div class="col-3 p-0 d-flex" style="gap: 10px;">
                        <span class="bold">Indicators : </span>
                        <span class="d-flex" style="gap: 5px;">
                            <label class="d-flex align-items-center" style="width: 50px; gap: 10px;">
                                <input type="radio" class="form-check"> Ok
                            </label>
                            <label class="d-flex align-items-center" style="width: 70px; gap: 10px;">
                                <input type="radio" class="form-check"> Not Ok
                            </label>
                        </span>
                    </div>
                </div>
                <div class="d-flex">
                    <div class="col-3 p-0 d-flex" style="gap: 10px;">
                        <span class="bold">Front Breaks : </span>
                        <span class="d-flex" style="gap: 5px;">
                            <label class="d-flex align-items-center" style="width: 50px; gap: 10px;">
                                <input type="radio" class="form-check"> Ok
                            </label>
                            <label class="d-flex align-items-center" style="width: 70px; gap: 10px;">
                                <input type="radio" class="form-check"> Not Ok
                            </label>
                        </span>
                    </div>
                    <div class="col-3 p-0 d-flex" style="gap: 10px;">
                        <span class="bold">Rear Breaks : </span>
                        <span class="d-flex" style="gap: 5px;">
                            <label class="d-flex align-items-center" style="width: 50px; gap: 10px;">
                                <input type="radio" class="form-check"> Ok
                            </label>
                            <label class="d-flex align-items-center" style="width: 70px; gap: 10px;">
                                <input type="radio" class="form-check"> Not Ok
                            </label>
                        </span>
                    </div>
                </div>
            </div>
        </section>
        <section class="container-fluid">
            <p class="py-3 px-4">
                I <span class="bold"> ${data.name} </span> S/D/W of Mr. <span class="bold"> ${data.father} </span> hereby acknowledge & agree to the following Terms & Conditions. I've read all the points very carefully
                and I don't have any objection regarding the terms & conditions. I am taking this vehicle number <span class="bold"> ${data.vehicle.split("--")[1]} </span> from Date <span class="bold"> ${data.fdate}, ${data.fTime} </span> to
                Date <span class="bold"> ${data.tdate}, ${data.tTime} </span> on rent for my personal use till the time mentioned above, the entire responsibility of the vehicle will be mine.
            </p>
            <div class="d-flex">
                <div class="col-3 border ml-auto" style="height: 70px;"></div>
            </div>
            <br>
        </section>
    </main>

  </body>
</html>`
}