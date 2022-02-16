@extends('app')

@section('content')
    <script>
        let user = {!! json_encode($user) !!}
        let posts = {!! json_encode($posts) !!}
        let comments = {!! json_encode($comments) !!};
        let postUser = user;
    </script>
    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
        @csrf
    </form>
    <div id="profile"></div>
@endsection