@extends('app')
<script>

var comments = {!! json_encode($comments) !!}

var post_id = {!! json_encode($post_id) !!}

var commentUser = {!! json_encode($user) !!}
var post = {!! json_encode($post) !!}
var posts = {!! json_encode($posts) !!}
</script>
@section('content')
    <div id="thread"></div>
@endsection