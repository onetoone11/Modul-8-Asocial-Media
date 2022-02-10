@extends('app')


@section('content')
<script>
    let posts = {!! json_encode($posts) !!};
    let comments = {!! json_encode($comments) !!};
    console.log({!! json_encode($globalData) !!});
</script>
{{-- <div id="index"></div> --}}
{{-- för att logga ut tills fixat --}}
<div class="container">
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