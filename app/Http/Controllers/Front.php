<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Front extends Controller
{

	public function index()
    {
    	return view('products.index');
    }
    

    public function products()
    {
    	# code...
    }

    public function product_details($id)
    {
    	# code...
    }

    public function product_categories()
    {
    	# code...
    }

    public function product_brands()
    {
    	# code...
    }

    public function blogs()
    {
    	# code...
    }

    public function blog_post($id)
    {
    	# code...
    }

    public function contact_us()
    {
    	return view('directory.contact_us');
    }

    public function login()
    {
    	# code...
    }

    public function logout()
    {
    	# code...
    }

    public function cart()
    {
    	# code...
    }

    public function checkout()
    {
    	# code...
    }

    public function search($query)
    {
    	# code...
    }
}
