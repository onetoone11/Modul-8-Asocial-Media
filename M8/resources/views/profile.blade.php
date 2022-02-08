@extends('app')

@section('content')
    <script>
        let user = {!! json_encode($user) !!}
        let posts = {!! json_encode($posts) !!};
        let comments = {!! json_encode($comments) !!};
    </script>
    <div id="profile"></div>
@endsection