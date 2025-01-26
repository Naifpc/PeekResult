import React from "react";

function mySubscription() {
  return (
    <div class="container p-2 p-sm-2 p-md-3 p-lg-4 p-xl-5 ">
      <h4 className="mb-4">الاشتراكات</h4>

      <div className="text-center">
      <div className="my-sub-image ">

      </div>
      <h3 className="my-4">
        محمد نايف
      </h3>

      </div>
      


      <table class="table table-hover">
        <tbody>
          <tr>
            <th>المدرب</th>
            <td className="text-start">محمد نايف</td>
          </tr>
          <tr>

            <th>نوع الخطة</th>
            <td className="text-start">شهري</td>
          </tr>
          <tr>
            <th>الدفعة القادمة</th>
            <td className="text-start">20 feb</td>
          </tr>
          <tr>
            <th> السعر</th>
            <td className="text-start">200 رس</td>
          </tr>
          <tr>
            <th> الحالة</th>
            <td className="text-start text-success-emphasis">فعال</td>
          </tr>
        </tbody>
      </table>

      <div className="row my-4">
        <div className="col-lg-4">
        <button class="btn btn-outline-danger w-100">
        <i class="bi bi-x-lg"></i> الغاء الاشتراك
        </button>
        </div>
      </div>
    </div>
  );
}

export default mySubscription;
