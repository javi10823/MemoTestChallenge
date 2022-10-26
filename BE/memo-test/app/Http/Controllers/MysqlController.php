<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\tests;
use \DB;

class MysqlController extends Controller
{
  public function getAllTests() {
    return tests::where("id", "1")->get();
  }
}
