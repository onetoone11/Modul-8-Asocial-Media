@extends('app')


@section('content')
<script>
    let posts = {!! json_encode($posts) !!}
    let comments = {!! json_encode($comments) !!};
</script>
  
    <div id="index"></div>
@endsection