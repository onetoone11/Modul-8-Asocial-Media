@extends('app')
<script>

var comments = {!! json_encode($comments) !!}

var post_id = {!! json_encode($post_id) !!}

// console.log({{$post_id}})
var post = {!! json_encode($post) !!}
</script>
@section('content')
{!! json_encode($comments) !!}
    {!! json_encode($post) !!}
    <div id="thread"></div>
@endsection