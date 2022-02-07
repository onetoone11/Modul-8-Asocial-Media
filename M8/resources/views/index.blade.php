@extends('app')

@section('content')
{{-- för att logga ut tills fixat --}}
<div class="conatiner">
    <a class="" href="{{ route('logout') }}"
      onclick="event.preventDefault();
      document.getElementById('logout-form').submit();">
      {{ __('Logout') }}
    </a>

    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
      @csrf
    </form>
  </div>
  
    <div id="index"></div>
@endsection