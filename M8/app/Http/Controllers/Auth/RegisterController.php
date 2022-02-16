<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Validator;
use App\Providers\RouteServiceProvider;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use DB;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Show the application registration form.
     *
     * @return \Illuminate\Http\Response
     */
    public function showRegistrationForm()
    {
        $posts = DB::select(DB::raw("SELECT * FROM posts ORDER BY created_at"));
        return view('auth.register')->with('posts', $posts)->with(["globalData" => collect(['user' => Auth::user()])]);;
    }

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
            'img' => ['string', 'max:500'],
            'algorithm' => ['string', 'max:100']
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\Models\User
     */
    protected function create(array $data)
    {
        
    $profilePictures = array(
        'https://upload.wikimedia.org/wikipedia/commons/d/d7/Green_Sea_Turtle_grazing_seagrass.jpg' => 0,
        'https://upload.wikimedia.org/wikipedia/commons/0/00/Tuebingen_Neckarfront.jpg' => 1,
        'https://storage.googleapis.com/download.tensorflow.org/example_images/grace_hopper.jpg' => 2,
        'https://upload.wikimedia.org/wikipedia/commons/b/b4/Vassily_Kandinsky%2C_1913_-_Composition_7.jpg' => 3,
        'https://upload.wikimedia.org/wikipedia/commons/6/68/Pillars_of_creation_2014_HST_WFC3-UVIS_full-res_denoised.jpg' => 4,
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1024px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg' => 5,
        'https://upload.wikimedia.org/wikipedia/commons/b/b7/JMW_Turner_-_Nantes_from_the_Ile_Feydeau.jpg' => 6,
        'https://upload.wikimedia.org/wikipedia/commons/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg' => 7,
        'https://upload.wikimedia.org/wikipedia/en/4/4c/Les_Demoiselles_d%27Avignon.jpg' => 8,
        'https://upload.wikimedia.org/wikipedia/en/3/3c/Pablo_Picasso%2C_1911-12%2C_Violon_%28Violin%29%2C_oil_on_canvas%2C_Kr%C3%B6ller-M%C3%BCller_Museum%2C_Otterlo%2C_Netherlands.jpg' => 9,
        'https://upload.wikimedia.org/wikipedia/en/7/7f/Pablo_Picasso%2C_1911%2C_Still_Life_with_a_Bottle_of_Rum%2C_oil_on_canvas%2C_61.3_x_50.5_cm%2C_Metropolitan_Museum_of_Art%2C_New_York.jpg' => 10,
        'https://upload.wikimedia.org/wikipedia/commons/3/36/Large_bonfire.jpg' => 11,
        'https://upload.wikimedia.org/wikipedia/commons/0/0d/Derkovits_Gyula_Woman_head_1922.jpg' => 12,
        'https://upload.wikimedia.org/wikipedia/commons/8/8e/Untitled_%28Still_life%29_%281913%29_-_Amadeo_Souza-Cardoso_%281887-1918%29_%2817385824283%29.jpg' => 13,
        'https://upload.wikimedia.org/wikipedia/commons/3/37/Derkovits_Gyula_Talig%C3%A1s_1920.jpg' => 14,
        'https://upload.wikimedia.org/wikipedia/commons/7/7d/Amadeo_de_Souza-Cardoso%2C_1915_-_Landscape_with_black_figure.jpg' => 15,
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Gallina_de_Guinea_%28Numida_meleagris%29%2C_parque_nacional_Kruger%2C_Sud%C3%A1frica%2C_2018-07-25%2C_DD_48.jpg/500px-Gallina_de_Guinea_%28Numida_meleagris%29%2C_parque_nacional_Kruger%2C_Sud%C3%A1frica%2C_2018-07-25%2C_DD_48.jpg' => 16
    );

    // Image algorithms
    $algorithms = [
        // 'algorithm--zoomImage' => 0, 
        'algorithm--brightness' => 1, 
        'algorithm--filter-red' => 2, 
        'algorithm--mix-blend-difference' => 3, 
        'algorithm--scale-x' => 4, 
        'algorithm--hue' => 5, 
        'algorithm--blur' => 6,
        'doubleConsonant' => 7, 
        'specialChars' => 8, 
        'convSmileys' => 9, 
        'lowerUpper' => 10, 
        'scrambleMid' => 11, 
        'scambleWords' => 12,
        'skansk' => 13,
        'wrongSpell' => 14
    ];

    $randomIm = rand(1, 16);
    $randomAl = rand(0, 14);
    $profilePicture = array_search($randomIm, $profilePictures);
    $algorithm = array_search($randomAl, $algorithms);

        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'img' => $profilePicture,
            'algorithm' => $algorithm
        ]);
    }
}
